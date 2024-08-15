import styles from './Input.module.css';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const Input = forwardRef(({ isSearch, text, value, onChange, name }, ref) => {
  const inputStyles = cx({
    input: true,
    'search-input': isSearch,
  });

  return (
    <input
      ref={ref}
      className={inputStyles}
      value={value}
      onChange={onChange}
      type="text"
      placeholder={text}
      name={name}
    />
  );
});

export default Input;
