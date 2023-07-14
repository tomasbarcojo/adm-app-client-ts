import React from 'react';
import { enqueueSnackbar } from 'notistack';
import '../../App.css';

// import { useCustomDispatch, useCustomSelector } from 'hooks/redux';
// import { loginUser } from 'redux/slices/auth';

const Home: React.FC = () => {
  // const {
  //   auth: { accessToken, isLoading }
  // } = useCustomSelector((state) => state);
  // const dispatch = useCustomDispatch();

  // console.log(accessToken);

  // const handleLogin = (): void => {
  //   dispatch(
  //     loginUser({
  //       username: 'admin',
  //       password: '1234'
  //     })
  //   );
  // };

  // return (
  //   <div>
  //     Home <button onClick={handleLogin}>Login</button>
  //     {isLoading === true ? 'loading...' : null}
  //   </div>
  // );
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
