import React, { type ChangeEvent, useState } from 'react';
import './CreateProductForm.css';
import addImagen from './addimagen.svg';
// import addItem from './additem.svg';
import { BoxForm } from 'components/Forms/BoxForm';
import { createProduct, type ProductData } from 'redux/slices/products';
import { useCustomDispatch } from 'redux/hooks';
import { InputText } from 'components/Inputs/InputText/InputText';
import { InputSelect } from 'components/Inputs/InputSelect/InputSelect';

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua &amp; Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia &amp; Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central Arfrican Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cuba',
  'Curacao',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauro',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre &amp; Miquelon',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'St Kitts &amp; Nevis',
  'St Lucia',
  'St Vincent',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad &amp; Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks &amp; Caicos',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States of America',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

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

  // const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setData({ ...data, [event.target.name]: event.target.value });
  // };

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
          <div className="inputsContainerForm">
            <div className="inputsForm">
              <div className="oneinput">
                <InputText
                  placeHolder="Name"
                  inputName="productName"
                  onInputChange={handleChange}
                />
              </div>
              <div className="twoinput">
                <InputSelect placeHolder="Supplier" dataList={countries} />
                <InputSelect placeHolder="Supplier" dataList={countries} />
              </div>
              <div className="twoinput">
                <InputText
                  placeHolder="Code"
                  inputName="code"
                  onInputChange={handleChange}
                />
                <InputText
                  placeHolder="Price"
                  inputName="price"
                  onInputChange={handleChange}
                />
              </div>
              <div className="twoinput">
                <InputText
                  placeHolder="Stock"
                  inputName="stock"
                  onInputChange={handleChange}
                />
                <InputText
                  placeHolder="Stock Alert"
                  inputName="stockAlert"
                  onInputChange={handleChange}
                  inputType="number"
                />
              </div>
              <textarea
                className="textareaProduct"
                name="description"
                placeholder="Description"
                maxLength={500}
                onChange={handleChange}
              />
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
                  <img className="addImage" alt="Bx add" src={addImagen} />
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
          <div className="boxFormButtons">
            <button className="backBtn">Back</button>
            <button className="doneBtn">Done</button>
          </div>
        </form>
      </BoxForm>
    </div>
  );
};
