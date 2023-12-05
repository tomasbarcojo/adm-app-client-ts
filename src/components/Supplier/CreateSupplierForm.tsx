import React, { type ChangeEvent, useState } from 'react';
import { useCustomDispatch } from 'redux/hooks';
import { BoxForm } from 'components/Forms/BoxForm';
import { InputText } from 'components/Inputs/InputText/InputText';
import {
  createSupplier,
  type SupplierData
} from 'redux/slices/supplier/supplier';

const initialState: SupplierData = {
  businessName: '',
  cuit: '',
  phone: '',
  altPhone: '',
  address: '',
  city: '',
  CP: '',
  bankaccount1: '',
  bankaccount2: '',
  bankaccount3: '',
  obs: ''
};

export const CreateSupplierForm = (): JSX.Element => {
  const [data, setData] = useState<SupplierData>(initialState);
  const dispatch = useCustomDispatch();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createSupplier(data));
  };

  return (
    <div>
      <BoxForm>
        <form onSubmit={handleSubmit}>
          <div className="inputsContainerForm">
            <div className="inputsForm">
              <div className="twoinput">
                {
                  <InputText
                    placeHolder="Business Name"
                    inputName="businessName"
                    onInputChange={handleChange}
                  />
                }
                {
                  <InputText
                    placeHolder="CUIT"
                    inputName="cuit"
                    onInputChange={handleChange}
                  />
                }
              </div>
              <div className="twoinput">
                {
                  <InputText
                    placeHolder="Phone"
                    inputName="phone"
                    onInputChange={handleChange}
                  />
                }
                {
                  <InputText
                    placeHolder="Alt Phone"
                    inputName="altPhone"
                    onInputChange={handleChange}
                  />
                }
              </div>
              <div className="twoinput">
                {
                  <InputText
                    placeHolder="Address"
                    inputName="address"
                    onInputChange={handleChange}
                  />
                }
                {
                  <InputText
                    placeHolder="City"
                    inputName="city"
                    onInputChange={handleChange}
                  />
                }
              </div>
              <div className="twoinput">
                {
                  <InputText
                    placeHolder="CP"
                    inputName="CP"
                    onInputChange={handleChange}
                  />
                }
                {
                  <InputText
                    placeHolder="Bank Account 1"
                    inputName="bankAccount1"
                    onInputChange={handleChange}
                  />
                }
              </div>
              <div className="twoinput">
                {
                  <InputText
                    placeHolder="Bank Account 2"
                    inputName="bankAccount2"
                    onInputChange={handleChange}
                  />
                }
                {
                  <InputText
                    placeHolder="Bank Account 3"
                    inputName="bankAccount3"
                    onInputChange={handleChange}
                  />
                }
              </div>
              <textarea
                className="textareaInput"
                name="description"
                placeholder="Description"
                maxLength={500}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="boxFormButtons">
            <button className="doneBtn" type="submit">
              Done
            </button>
          </div>
        </form>
      </BoxForm>
    </div>
  );
};
