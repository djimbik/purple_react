import React, { useState } from 'react';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import './SearchForm.css';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData.entries());
    console.log(formProps);
  };

  return (
    <form className="input-wrapper" onSubmit={searchHandler}>
      <Input
        isSearch={true}
        text={'Введите название'}
        value={inputValue}
        onChange={inputChange}
        name="search"
      />
      <Button
        type="submit"
        text="Искать"
        onClick={() => {
          console.log('Нажали');
        }}
      />
    </form>
  );
};

export default SearchForm;
