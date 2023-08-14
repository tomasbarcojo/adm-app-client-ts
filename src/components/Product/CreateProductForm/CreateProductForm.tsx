import React from 'react';
import './CreateProductForm.css';
import { InputText } from 'components/Inputs/InputText/InputText';
import addImagen from './addimagen.svg';
// import addItem from './additem.svg';
import { InputSelect } from 'components/Inputs/InputSelect/InputSelect';
import { BoxForm } from 'components/Forms/BoxForm';

export const CreateProductForm = (): JSX.Element => {
  return (
    <div>
      {/* <div className="componentCreateProductForm">
        <div className="boxComponent">
          <div className="rectangleTop">
            <img
              className="bx-add-to-queue"
              alt="Bx add to queue"
              src={addItem}
            />
            <div className="add-item">Add Item</div>
          </div>
          <div className="rectangleWhite">
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
      </div> */}
      <BoxForm>
        <div className="inputsComponentForm">
          <div className="inputsTextFrom">
            <div className="nameProduct">{<InputText />}</div>
            <div className="twoinput">
              <div className="categoryProduct">{<InputSelect />}</div>
              <div className="supplierProduct">{<InputSelect />}</div>
            </div>
            <div className="twoinput">
              <div className="codeProduct">{<InputText />}</div>
              <div className="priceProduct">{<InputText />}</div>
            </div>
            <div className="twoinput">
              <div className="stockProduct">{<InputText />}</div>
              <div className="stock-alertProduct">{<InputText />}</div>
            </div>
            <div className="descriptionProduct">{<InputText />}</div>
          </div>
          <div className="inputPic">
            <img className="bx-image-add" alt="Bx add" src={addImagen} />
            <div className="rectangle-3" />
            <div className="add-image">Add image</div>
          </div>
        </div>
        <div className="ProductBtn">
          <button className="backBtn">Back</button>
          <button className="doneBtn">Done</button>
        </div>
      </BoxForm>
    </div>
  );
};