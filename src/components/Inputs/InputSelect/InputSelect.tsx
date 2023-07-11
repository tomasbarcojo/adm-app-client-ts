import React from 'react';
import './InputSelect.css';

export const InputSelect = (): JSX.Element => {
  return (
    <div className="component">
      <select className="inputSelect">
        <option value="value1">Value 1</option>
        <option value="value2" selected>
          Name
        </option>
        <option value="value3">Value 3</option>
      </select>
    </div>
  );
};
