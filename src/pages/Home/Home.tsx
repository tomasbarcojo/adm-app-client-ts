import React from 'react';
import { enqueueSnackbar } from 'notistack';
import '../../App.css';

const Home: React.FC = () => {
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
    </div>
  );
};

export default Home;
