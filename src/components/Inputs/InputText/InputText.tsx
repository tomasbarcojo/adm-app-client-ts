import React from 'react';
import './InputText.css';

export const InputText = (props: { placeHolder: string }): JSX.Element => {
  return (
    <div className="component">
      <input
        className="inputText"
        type="text"
        placeholder={props.placeHolder}
      ></input>
    </div>
  );
};
