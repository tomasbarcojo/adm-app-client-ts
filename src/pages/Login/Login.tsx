import React, { type ChangeEvent, useState, useEffect } from 'react';
import './Login.css';

import userNameIcon from '../../images/username.svg';
import passwordNameIcon from '../../images/contraseña.svg';
import activaLogo from '../../images/adm-logo-color.png';
import { useCustomDispatch, useCustomSelector } from 'hooks/redux';
import { userLogin } from 'redux/slices/auth';
import { useNavigate } from 'react-router-dom';

interface AuthUser {
  username: string;
  password: string;
  keepLogged: boolean;
}

const initialState: AuthUser = {
  username: '',
  password: '',
  keepLogged: false
};

const Login: React.FC = () => {
  const [data, setData] = useState<AuthUser>(initialState);
  const dispatch = useCustomDispatch();
  const history = useNavigate();
  const auth = useCustomSelector((state) => state.auth);

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    if (auth.accessToken) history('/admin');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.accessToken]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // const handleChangeUserInput = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setData({
  //     ...data,
  //     username: e.target.value
  //   });
  // };

  // const handleChangePasswordInput = (
  //   e: ChangeEvent<HTMLInputElement>
  // ): void => {
  //   setData({
  //     ...data,
  //     password: e.target.value
  //   });
  // };

  const handleKeepLogged = (e: ChangeEvent<HTMLInputElement>): void => {
    setData({
      ...data,
      keepLogged: e.target.checked
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (data.username !== '' && data.password !== '') {
      dispatch(
        userLogin({
          username: data.username,
          password: data.password,
          keepLogged: data.keepLogged ?? false
        })
      ).then((result) => {
        if (result.payload) history('/admin');
      });
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="loginContainer">
        <div className="loginLeft">
          <p className="welcomeTitle">¡Bienvenido de nuevo!</p>
        </div>
        <div className="loginRight">
          <div className="loginForm">
            <img
              src={activaLogo}
              style={{ paddingBottom: '50px' }}
              alt="Activa logo"
            />
            <p className="loginTitle">Inicio de sesión</p>
            <label className="usernameLabel">
              <img
                src={userNameIcon}
                className="icon icon-user"
                alt="Username Icon"
              />
              <input
                className="loginInput"
                type="text"
                placeholder="Usuario"
                name="username"
                onChange={handleChange}
              />
            </label>
            <label className="passwordLabel">
              <img
                src={passwordNameIcon}
                className="icon icon-user"
                alt="Password Icon"
              />
              <input
                className="loginInput"
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleChange}
              />
            </label>
            <button className="loginButton" type="submit">
              Ingresar
            </button>
            <div className="rememberOrForgottenPassword">
              <label>
                <input type="checkbox" id="cbox1" onChange={handleKeepLogged} />{' '}
                Recordarme
              </label>
              <p>¿Olvidaste tu contraseña?</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
