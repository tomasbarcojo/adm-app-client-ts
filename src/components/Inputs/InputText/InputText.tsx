import React from 'react';
import './InputText.css';

export const InputText = (): JSX.Element => {
  return (
    <div className="component">
      <input className="inputText" type="text" placeholder="Name"></input>
    </div>
  );
};
