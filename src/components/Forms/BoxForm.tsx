import React from 'react';
import addItem from './additem.svg';
import './BoxForm.css';

interface BoxFormProps {
  children: React.ReactNode;
}

export const BoxForm: React.FC<BoxFormProps> = ({ children }) => {
  return (
    <div className="componentForm">
      <div className="boxComponentForm">
        <div className="rectangleTopForm">
          <img
            className="bx-add-to-queue"
            alt="Bx add to queue"
            src={addItem}
          />
          <div className="box-title">Add Item</div>
        </div>
      </div>
      <div className="rectangleWhiteForm"> {children} </div>
    </div>
  );
};
