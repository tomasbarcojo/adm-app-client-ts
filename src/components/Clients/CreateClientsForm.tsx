import React, { type ChangeEvent, useState } from 'react';
import { useCustomDispatch } from 'redux/hooks';
import { BoxForm } from 'components/Forms/BoxForm';
import { InputText } from 'components/Inputs/InputText/InputText';
import { createClient, type ClientData } from 'redux/slices/clients';

const initialState: ClientData = {
  businessName: '',
  cuit: '',
  phone: '',
  altPhone: '',
  address: '',
  city: '',
  CP: ''
};

export const CreateClientForm = (): JSX.Element => {
  const [data, setData] = useState<ClientData>(initialState);
  const dispatch = useCustomDispatch();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createClient(data));
  };

  return (
    <div>
      <BoxForm>
        <form onSubmit={handleSubmit}>
          <div className="inputsContainerForm">
            <div className="inputsForm">
              <div className="twoinput">
                <InputText
                  placeHolder="Business Name"
                  inputName="businessName"
                  onInputChange={handleChange}
                />
                <InputText
                  placeHolder="CUIT"
                  inputName="cuit"
                  onInputChange={handleChange}
                />
              </div>
              <div className="twoinput">
                <InputText
                  placeHolder="Phone"
                  inputName="phone"
                  onInputChange={handleChange}
                />
                <InputText
                  placeHolder="Alt Phone"
                  inputName="altPhone"
                  onInputChange={handleChange}
                />
              </div>
              <div className="twoinput">
                <InputText
                  placeHolder="Address"
                  inputName="address"
                  onInputChange={handleChange}
                />
                <InputText
                  placeHolder="City"
                  inputName="city"
                  onInputChange={handleChange}
                />
              </div>
              <div className="twoinput">
                <InputText
                  placeHolder="CP"
                  inputName="CP"
                  onInputChange={handleChange}
                />
                <InputText
                  placeHolder="Price List"
                  inputName="priceList"
                  onInputChange={handleChange}
                />
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
