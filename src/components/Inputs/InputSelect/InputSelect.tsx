import React from 'react';
import './InputSelect.css';
import '../InputText/InputText.css';

export const InputSelect = (props: { placeHolder: string }): JSX.Element => {
  // autocomplete react component
  // https://www.youtube.com/watch?v=Jd7s7egjt30

  return (
    // <!--Make sure the form has the autocomplete function switched off:-->
    <form autoComplete="off" action="/action_page.php">
      <div className="autocomplete" style={{ width: '300px' }}>
        <input
          id="myInput"
          type="text"
          name="myCountry"
          placeholder="Country"
        />
      </div>
      <input type="submit" />
    </form>
  );
};
