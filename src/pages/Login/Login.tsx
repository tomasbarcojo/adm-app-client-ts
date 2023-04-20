import React, { type ChangeEvent, useState, useEffect } from 'react';
import './Login.css';

import userNameIcon from '../../images/username.svg';
import passwordNameIcon from '../../images/contraseña.svg';
import activaLogo from '../../images/adm-logo-color.png';

interface AuthUser {
  username?: string;
  password?: string;
}

const Login: React.FC = () => {
  const [data, setData] = useState<AuthUser | null>(null);
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh);
  }, []);

  const handleChangeUserInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setData({
      ...data,
      username: e.target.value
    });
  };

  const handleChangePasswordInput = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setData({
      ...data,
      password: e.target.value
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  // const handleSubmit = (e) => {
  //   console.log(keepLogged);
  //   e.preventDefault();
  //   dispatch(
  //     userLogin(data, history, keepLogged, enqueueSnackbar, closeSnackbar)
  //   );
  // };

  return (
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
              onChange={handleChangeUserInput}
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
              onChange={handleChangePasswordInput}
            />
          </label>
          <button className="loginButton" type="submit">
            Ingresar
          </button>
          <div className="rememberOrForgottenPassword">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />{' '}
              Recordarme
            </label>
            <p>¿Olvidaste tu contraseña?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
