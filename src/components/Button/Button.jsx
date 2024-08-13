import React from 'react';
import './Button.css';

const Button = ({ text, onClick, type }) => {
  return (
    <button onClick={onClick} className="button" type={type}>
      {text}
    </button>
  );
};

export default Button;
