import React, { type ChangeEvent, useState } from 'react';
import { BoxForm } from 'components/Forms/BoxForm';
// import { InputText } from 'components/Inputs/InputText/InputText';
import './CreateCateogryForm.css';
import addImagen from './addimagen.svg';
import { useCustomDispatch } from 'redux/hooks';
import { createCategory, type CategoryData } from 'redux/slices/category';
import { InputText } from 'components/Inputs/InputText/InputText';

const initialState: CategoryData = {
  categoryName: '',
  description: null,
  image: '',
  files: null
};

export const CreateCategoryForm = (): JSX.Element => {
  const dispatch = useCustomDispatch();
  const [data, setData] = useState<CategoryData>(initialState);
  const [preview, setPreview] = useState<string | null>();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const fileSelectedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const filesList = event.target.files as FileList;
    if (filesList[0]) {
      setData({ ...data, files: filesList[0] });
      setPreview(URL.createObjectURL(filesList[0]));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createCategory(data));
  };

  return (
    <div>
      <BoxForm>
        <form onSubmit={handleSubmit}>
          <div className="inputsCategoryForm">
            <div className="inputsTextFromCategory">
              <div className="nameCategory">
                <div className="component">
                  {
                    <InputText
                      placeHolder="Name"
                      inputName="categoryName"
                      onInputChange={handleChange}
                    />
                  }
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
              {preview ? (
                <img
                  className="imagePreview"
                  src={preview}
                  alt="Imagen del producto"
                />
              ) : (
                <>
                  <img
                    className="addImagenCategory"
                    alt="Bx add"
                    src={addImagen}
                  />
                  <div className="rectanglegrey" />
                </>
              )}
              <input
                type="file"
                id="myFile"
                name="filename"
                onChange={fileSelectedHandler}
                accept="image/*"
              />
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
