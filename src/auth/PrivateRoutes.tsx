import { useCustomSelector } from 'redux/hooks';
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes(props: {
  children: React.ReactNode;
}): JSX.Element | null {
  const auth = useCustomSelector((state) => state.auth);
  // if (auth.accessToken) {
  //   return <>{props.children}</>;
  // } else {
  //   return <Navigate to="/login" />;
  // }
  return <>{props.children}</>;
}
