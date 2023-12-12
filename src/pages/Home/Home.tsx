import React from 'react';
import { enqueueSnackbar } from 'notistack';
import i18n from '../../i18n';

import '../../App.css';

const Home: React.FC = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      Home
      <button
        onClick={() =>
          enqueueSnackbar(`El usuario o contraseña son inválidos`, {
            variant: 'error',
            preventDuplicate: false
          })
        }
      >
        Login2
      </button>
      <p>{i18n.t('admin.test-key')}</p>
      <button
        onClick={() => {
          changeLanguage('es');
        }}
      >
        ES
      </button>
      <button
        onClick={() => {
          changeLanguage('en');
        }}
      >
        EN
      </button>
    </div>
  );
};

export default Home;
