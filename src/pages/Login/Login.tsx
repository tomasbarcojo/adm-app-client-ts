import React, { type ChangeEvent, useState, useEffect } from 'react';
import './Login.css';

import userNameIcon from '../../images/username.svg';
import passwordNameIcon from '../../images/contraseña.svg';
import activaLogo from '../../images/adm-logo-color.png';
import { useCustomDispatch, useCustomSelector } from 'redux/hooks';
import { type LoginData, userLogin } from 'redux/slices/auth';
import { useNavigate } from 'react-router-dom';
import i18n from '../../i18n';

const initialState: LoginData = {
  username: '',
  password: '',
  keepLogged: true
};

const Login: React.FC = () => {
  const [data, setData] = useState<LoginData>(initialState);
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

  // const handleKeepLogged = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setData({
  //     ...data,
  //     keepLogged: e.target.checked
  //   });
  // };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (data.username !== '' && data.password !== '') {
      dispatch(
        userLogin({
          username: data.username,
          password: data.password,
          keepLogged: data.keepLogged
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
          <p className="welcomeTitle">{i18n.t('login.welcomeBack')}</p>
        </div>
        <div className="loginRight">
          <div className="loginForm">
            <img
              src={activaLogo}
              style={{ paddingBottom: '50px' }}
              alt="Activa logo"
            />
            <p className="loginTitle">{i18n.t('login.loginDescription')}</p>
            <label className="usernameLabel">
              <img
                src={userNameIcon}
                className="icon icon-user"
                alt="Username Icon"
              />
              <input
                className="loginInput"
                type="text"
                placeholder={i18n.t('login.usernameInput')}
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
                placeholder={i18n.t('login.passwordInput')}
                name="password"
                onChange={handleChange}
              />
            </label>
            <button className="loginButton" type="submit">
              {i18n.t('login.loginButton')}
            </button>
            <div className="forgottenPassword">
              <a href="/password/reset">{i18n.t('login.forgotPassword')}</a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
