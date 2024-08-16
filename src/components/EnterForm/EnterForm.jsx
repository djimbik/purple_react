import React, { useContext, useRef, useState } from 'react';
import styles from './EnterForm.module.css';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import useLocalStorage from '../../hooks/use-localstorage.hook.js';
import { UserContext } from '../../context/userContext.jsx';

const EnterForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, saveData] = useLocalStorage('data');
  const { setUserData } = useContext(UserContext);
  const nameRef = useRef();

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const enterHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData.entries());

    if (formProps.name) {
      const updatedData = data.map((item) => {
        if (item.name.toLowerCase() === formProps.name.toLowerCase()) {
          setUserData({
            isAuth: true,
            name: item.name,
          });
          return {
            ...item,
            isLogined: true,
          };
        }
        return item;
      });
      saveData(updatedData);
    }
  };

  return (
    <form className={styles['input-wrapper']} onSubmit={enterHandler}>
      <Input
        ref={nameRef}
        text={'Ваше имя'}
        value={inputValue}
        onChange={inputChange}
        name='name'
      />
      <Button buttonClass='enter-button' type='submit' text='Войти в профиль' />
    </form>
  );
};

export default EnterForm;
