import React, { type ChangeEvent, useState } from 'react';
import './InputText.css';

export const InputText = (props: {
  placeHolder: string;
  inputName: string;
  inputType?: string;
  onInputChange: (value: ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element => {
  const [inputValue, setInputValue] = useState<string | number>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    props.onInputChange(event);
  };

  return (
    <div className="input-text-contain">
      <input
        className="inputText"
        type={props.inputType ?? 'text'}
        name={props.inputName}
        autoComplete="off"
        value={inputValue}
        onChange={handleInputChange}
        aria-labelledby="placeholder-fname"
      />
      <label
        className="placeholder-text-label"
        htmlFor="fname"
        id="placeholder-fname"
      >
        <div className="placeholder-text">{props.placeHolder}</div>
      </label>
    </div>
  );
};
