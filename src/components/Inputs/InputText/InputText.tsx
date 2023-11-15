import React, { type ChangeEvent, useState } from 'react';
import './InputText.css';

export const InputText = (props: {
  placeHolder: string;
  inputName: string;
  onInputChange: (value: ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element => {
  const [inputValue, setInputValue] = useState<string | number>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    props.onInputChange(event);
  };

  return (
    <div className="component">
      <input
        className="inputText"
        type="text"
        name={props.inputName}
        placeholder={props.placeHolder}
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};
