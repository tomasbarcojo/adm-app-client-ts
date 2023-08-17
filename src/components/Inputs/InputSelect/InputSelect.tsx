import React from 'react';
import './InputSelect.css';

export const InputSelect = (props: { placeHolder: string }): JSX.Element => {
  return (
    <div className="component">
      <select className="inputSelect">
        <option value="value2" selected>
          {props.placeHolder}
        </option>
        <option value="value1">Value 1</option>
        <option value="value3">Value 2</option>
      </select>
    </div>
  );
};
