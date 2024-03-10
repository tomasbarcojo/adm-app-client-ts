import React, { useState } from 'react';
import './InputText.css';

export const InputText = (props: {
  placeHolder: string;
  inputName: string;
  inputType?: string;
  onInputChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (value: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
}): JSX.Element => {
  const [inputValue, setInputValue] = useState<string | number>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    props.onInputChange?.(event);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const e = event.target as HTMLInputElement;
    setInputValue(e.value);
    props.onKeyDown?.(event);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const e = event.target as HTMLInputElement;
    setInputValue(e.value);
    props.onBlur?.(event);
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
        onKeyDown={handleOnKeyDown}
        onBlur={handleOnBlur}
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
