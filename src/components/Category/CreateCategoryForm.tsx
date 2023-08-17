import React from 'react';
import { BoxForm } from 'components/Forms/BoxForm';
import { InputText } from 'components/Inputs/InputText/InputText';
import './CreateCateogryForm.css';
import addImagen from './addimagen.svg';

export const CreateCategoryForm = (): JSX.Element => {
  return (
    <div>
      <BoxForm>
        <div className="inputsCategoryForm">
          <div className="inputsTextFromCategory">
            <div className="nameCategory">
              {<InputText placeHolder="Name" />}
            </div>
            <textarea
              className="textareaCategory"
              name="textarea"
              placeholder="Description"
              maxLength={500}
            ></textarea>
          </div>
          <div className="inputPicCategory">
            <img className="addImagenCategory" alt="Bx add" src={addImagen} />
            <div className="rectanglegrey" />
            <div className="add-image">Add image</div>
          </div>
        </div>
        <div className="ProductBtnCtgry">
          <button className="backBtn">Back</button>
          <button className="doneBtn">Done</button>
        </div>
      </BoxForm>
    </div>
  );
};
