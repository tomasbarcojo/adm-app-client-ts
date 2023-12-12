import React from 'react';
import image from '../../images/skyscrapers.jpg';
import userNameIcon from '../../images/username.svg';

import './PasswordReset.css';

const PasswordReset: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="imageDiv">
          <img src={image} alt="password" />
        </div>
        <div className="dialogDiv">
          <div>
            <h1>¿Olvidaste tu contraseña?</h1>
            <p>
              Ingresa el usuario asociado a tu cuenta y te enviaremos un link
              para recuperar tu contraseña
            </p>
            {/* <form onSubmit={handleLogin}> */}
            <form className="formStyle">
              <div className="textInput">
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
                    // onChange={handleChange}
                  />
                </label>
              </div>
              <button className="loginButton" type="submit">
                Continuar
              </button>
            </form>
            <div className="forgottenPassword">
              <a href="/login">¿Ya tienes una cuenta?</a>
            </div>
          </div>
        </div>
        <div className="witheDiv"></div>
      </div>
    </>
  );
};

export default PasswordReset;
