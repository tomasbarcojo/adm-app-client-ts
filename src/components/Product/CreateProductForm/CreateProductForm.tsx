import React from 'react';
import './CreateProductForm.css';
import { InputText } from 'components/Inputs/InputText/InputText';
import addImagen from './addimagen.svg';
import addItem from './additem.svg';
import { InputSelect } from 'components/Inputs/InputSelect/InputSelect';

export const CreateProductForm = (): JSX.Element => {
  return (
    <div className="componentCreateProductForm">
      <div className="boxComponent">
        <div className="rectangleWhite">
          <img
            className="bx-add-to-queue"
            alt="Bx add to queue"
            src={addItem}
          />
          <div className="add-item">Add Item</div>
        </div>
        <div className="rectangleTop">
          <div className="inputsComponentForm">
            <div className="inputsTextFrom">
              <div className="name">{<InputText />}</div>
              <div className="twoinput">
                <div className="category">{<InputSelect />}</div>
                <div className="supplier">{<InputSelect />}</div>
              </div>
              <div className="twoinput">
                <div className="code">{<InputText />}</div>
                <div className="price">{<InputText />}</div>
              </div>
              <div className="twoinput">
                <div className="stock">{<InputText />}</div>
                <div className="stock-alert">{<InputText />}</div>
              </div>
              <div className="description">{<InputText />}</div>
            </div>
            <div className="inputPic">
              <img className="bx-image-add" alt="Bx add" src={addImagen} />
              <div className="rectangle-3" />
              <div className="add-image">Add image</div>
            </div>
          </div>
          <div className="ProductBtn">
            <button className="back">Back</button>
            <button className="done">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};
