import React, { useEffect, useRef, useState } from 'react';
import './InputSelect.css';
import '../InputText/InputText.css';

export const InputSelect = (props: {
  placeHolder: string;
  dataList?;
}): JSX.Element => {
  const [value, setValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = props.dataList
    .slice(0, 10)
    .filter((option) => option.toLowerCase().includes(value.toLowerCase()));
  const autocompleteRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="input-select-contain" ref={autocompleteRef}>
      <input
        className="inputText"
        value={value}
        onChange={handleChange}
        onFocus={() => {
          setShowSuggestions(true);
        }}
      />
      <label
        className="placeholder-text-label"
        htmlFor="fname"
        id="placeholder-fname"
      >
        <div className="placeholder-text">{props.placeHolder}</div>
      </label>
      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li
              onClick={() => {
                handleSuggestionClick(suggestion);
              }}
              key={suggestion}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
