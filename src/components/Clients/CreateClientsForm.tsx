import React, { type ChangeEvent, useState } from 'react';
import { useCustomDispatch } from 'redux/hooks';
import { BoxForm } from 'components/Forms/BoxForm';
import { InputText } from 'components/Inputs/InputText/InputText';
import './CreateClientsForm.css';
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
          <div className="inputsClientsForm">
            <div className="inputsTextFromClients">
              <div className="twoinput">
                <div className="nameClients">
                  <div className="component">
                    {
                      <InputText
                        placeHolder="Business Name"
                        inputName="businessName"
                        onInputChange={handleChange}
                      />
                    }
                  </div>
                </div>
                <div className="nameClients">
                  <div className="component">
                    {
                      <InputText
                        placeHolder="CUIT"
                        inputName="cuit"
                        onInputChange={handleChange}
                      />
                    }
                  </div>
                </div>
              </div>
              <div className="twoinput">
                <div className="nameClients">
                  <div className="component">
                    {
                      <InputText
                        placeHolder="Phone"
                        inputName="phone"
                        onInputChange={handleChange}
                      />
                    }
                  </div>
                </div>
                <div className="nameClients">
                  <div className="component">
                    {
                      <InputText
                        placeHolder="Alt Phone"
                        inputName="altPhone"
                        onInputChange={handleChange}
                      />
                    }
                  </div>
                </div>
              </div>
              <div className="twoinput">
                <div className="nameClients">
                  <div className="component">
                    {
                      <InputText
                        placeHolder="Address"
                        inputName="address"
                        onInputChange={handleChange}
                      />
                    }
                  </div>
                </div>
                <div className="nameClients">
                  <div className="component">
                    {
                      <InputText
                        placeHolder="City"
                        inputName="city"
                        onInputChange={handleChange}
                      />
                    }
                  </div>
                </div>
              </div>
              <div className="twoinput">
                <div className="nameClients">
                  <div className="component">
                    {
                      <InputText
                        placeHolder="CP"
                        inputName="CP"
                        onInputChange={handleChange}
                      />
                    }
                  </div>
                </div>
                <div className="nameClients">
                  <div className="component">
                    {
                      <InputText
                        placeHolder="Price List"
                        inputName="priceList"
                        onInputChange={handleChange}
                      />
                    }
                  </div>
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
          </div>
          <div className="ProductBtnCtgry">
            <button className="doneBtn" type="submit">
              Done
            </button>
          </div>
        </form>
      </BoxForm>
    </div>
  );
};
