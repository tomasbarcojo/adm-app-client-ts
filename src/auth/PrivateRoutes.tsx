// import { useCustomSelector } from 'redux/hooks';
import React from 'react';
// import { Navigate } from 'react-router-dom';

export default function PrivateRoutes(props: {
  children: React.ReactNode;
}): JSX.Element | null {
  // const auth = useCustomSelector((state) => state.auth);
  // if (auth.accessToken) {
  //   return <>{props.children}</>;
  // } else {
  //   return <Navigate to="/login" />;
  // }
  return <>{props.children}</>;
}

// https://blog.theashishmaurya.me/handling-jwt-access-and-refresh-token-using-axios-in-react-app
// jwt refresh token react
// https://dev.to/chafroudtarek/refresh-token-implementation-in-reactjs-53f7
// https://www.codingnepalweb.com/file-upload-with-progress-bar-html-javascript/
