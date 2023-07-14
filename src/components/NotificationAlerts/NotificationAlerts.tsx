import React from 'react';
import { type SnackbarKey, closeSnackbar } from 'notistack';

export default function SnackbarCloseButton(props: {
  snackbarKey: SnackbarKey;
}): JSX.Element {
  const { snackbarKey } = props;

  return (
    <button
      className="notistackButton"
      onClick={() => {
        closeSnackbar(snackbarKey);
      }}
    >
      X
    </button>
  );
}
