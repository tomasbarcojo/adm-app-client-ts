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
      <BoxForm>
        <div className="inputsComponentForm">
          <div className="inputsTextFrom">
            <div className="oneinput">
              <div className="nameProduct">
                {<InputText placeHolder="Name" />}
              </div>
            </div>
            <div className="twoinput">
              <div className="categoryProduct">
                {<InputSelect placeHolder="Category" />}
              </div>
              <div className="supplierProduct">
                {<InputSelect placeHolder="Supplier" />}
              </div>
            </div>
            <div className="twoinput">
              <div className="codeProduct">
                {<InputText placeHolder="Code" />}
              </div>
              <div className="priceProduct">
                {<InputText placeHolder="Price" />}
              </div>
            </div>
            <div className="twoinput">
              <div className="stockProduct">
                {<InputText placeHolder="Stock" />}
              </div>
              <div className="stock-alertProduct">
                {<InputText placeHolder="Stock Alert" />}
              </div>
            </div>
            <div className="oneinput">
              <textarea
                className="textareaProduct"
                name="textarea"
                placeholder="Description"
                maxLength={500}
              ></textarea>
            </div>
          </div>
          <div className="inputPic">
            <div className="rectangle-3">
              <img className="bx-image-add" alt="Bx add" src={addImagen} />
            </div>
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
