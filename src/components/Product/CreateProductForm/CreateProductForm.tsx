import React, { type ChangeEvent, useState } from 'react';
import './CreateProductForm.css';
import addImagen from './addimagen.svg';
// import addItem from './additem.svg';
import { BoxForm } from 'components/Forms/BoxForm';
import { createProduct, type ProductData } from 'redux/slices/products';
import { useCustomDispatch } from 'redux/hooks';
import { InputText } from 'components/Inputs/InputText/InputText';
import { InputSelect } from 'components/Inputs/InputSelect/InputSelect';

const initialState: ProductData = {
  name: '',
  categoryId: 0,
  supplierId: 0,
  code: '',
  price: 0,
  stock: 0,
  stockAlert: 0,
  description: null,
  files: null,
  image: ''
};

export const CreateProductForm = (): JSX.Element => {
  const dispatch = useCustomDispatch();
  const [data, setData] = useState<ProductData>(initialState);
  const [preview, setPreview] = useState<string | null>();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
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
    dispatch(createProduct(data));
  };

  return (
    <div>
      <BoxForm>
        <form onSubmit={handleSubmit}>
          <div className="inputsComponentForm">
            <div className="inputsTextFrom">
              <div className="oneinput">
                <div className="component">
                  <InputText
                    placeHolder="Name"
                    inputName="productName"
                    onInputChange={handleChange}
                  />
                </div>
              </div>
              <div className="twoinput">
                <div className="categoryProduct">
                  <div className="component">
                    <select
                      className="inputSelect"
                      placeholder="Category"
                      name="categoryId"
                      onChange={handleChangeSelect}
                    >
                      <option value="option1" selected>
                        Category
                      </option>
                      <option value="option2">1</option>
                      <option value="option2">2</option>
                    </select>
                  </div>
                  {/* {<InputSelect placeHolder="Category" />} */}
                </div>
                <div className="supplierProduct">
                  {/* <div className="component">
                    <select
                      className="inputSelect"
                      placeholder="Supplier"
                      name="supplierId"
                      onChange={handleChangeSelect}
                    >
                      <option value="option1" selected>
                        Supplier
                      </option>
                      <option value="option2">1</option>
                      <option value="option2">2</option>
                    </select>
                  </div> */}
                  {<InputSelect placeHolder="Supplier" />}
                </div>
              </div>
              <div className="twoinput">
                <div className="codeProduct">
                  <div className="component">
                    <InputText
                      placeHolder="Code"
                      inputName="code"
                      onInputChange={handleChange}
                    />
                  </div>
                </div>
                <div className="priceProduct">
                  <div className="component">
                    <InputText
                      placeHolder="Price"
                      inputName="price"
                      onInputChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="twoinput">
                <div className="stockProduct">
                  <div className="component">
                    <InputText
                      placeHolder="Stock"
                      inputName="stock"
                      onInputChange={handleChange}
                    />
                  </div>
                  {/* {<InputText placeHolder="Stock" />} */}
                </div>
                <div className="stock-alertProduct">
                  <div className="component">
                    <InputText
                      placeHolder="Stock Alert"
                      inputName="stockAlert"
                      onInputChange={handleChange}
                      inputType="number"
                    />
                  </div>
                  {/* {<InputText placeHolder="Stock Alert" />} */}
                </div>
              </div>
              <div className="oneinput">
                <textarea
                  className="textareaProduct"
                  name="description"
                  placeholder="Description"
                  maxLength={500}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="inputPic">
              {preview ? (
                <img
                  className="imagePreview"
                  src={preview}
                  alt="Imagen del producto"
                />
              ) : (
                <>
                  <img className="bx-image-add" alt="Bx add" src={addImagen} />
                  <div className="rectangle-3" />
                </>
              )}
              <input
                type="file"
                id="myFile"
                name="filename"
                onChange={fileSelectedHandler}
                accept="image/*"
              />
              {/* <div className="rectangle-3">
                <img className="bx-image-add" alt="Bx add" src={addImagen} />
              </div>
              <div className="add-image">Add image</div> */}
            </div>
          </div>
          <div className="ProductBtn">
            <button className="backBtn">Back</button>
            <button className="doneBtn">Done</button>
          </div>
        </form>
      </BoxForm>
    </div>
  );
};
