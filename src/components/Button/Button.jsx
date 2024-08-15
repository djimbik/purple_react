import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({ text, onClick, type, buttonClass }) => {
  const buttonStyles = cx({
    button: true,
    [buttonClass]: !!buttonClass,
  });

  return (
    <button onClick={onClick} className={buttonStyles} type={type}>
      {text}
    </button>
  );
};

export default Button;
