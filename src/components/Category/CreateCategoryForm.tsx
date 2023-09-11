import React, { type ChangeEvent, useState } from 'react';
import { BoxForm } from 'components/Forms/BoxForm';
// import { InputText } from 'components/Inputs/InputText/InputText';
import './CreateCateogryForm.css';
import addImagen from './addimagen.svg';
// import { useCustomDispatch } from 'redux/hooks';
import { type CategoryData } from 'redux/slices/category';

const initialState: CategoryData = {
  categoryName: '',
  description: null
};

export const CreateCategoryForm = (): JSX.Element => {
  // const dispatch = useCustomDispatch();
  const [data, setData] = useState<CategoryData>(initialState);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    // dispatch()
  };

  return (
    <div>
      <BoxForm>
        <form onSubmit={handleSubmit}>
          <div className="inputsCategoryForm">
            <div className="inputsTextFromCategory">
              <div className="nameCategory">
                {/* {<InputText placeHolder="Name" />} */}
                <div className="component">
                  <input
                    className="inputText"
                    type="text"
                    placeholder="Name"
                    name="categoryName"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <textarea
                className="textareaCategory"
                name="description"
                placeholder="Description"
                maxLength={500}
                onChange={handleChange}
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
            <button className="doneBtn" type="submit">
              Done
            </button>
          </div>
        </form>
      </BoxForm>
    </div>
  );
};
