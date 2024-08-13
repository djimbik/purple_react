import React from 'react';
import './Paragraph.css';

const Paragraph = ({ text, fontSize }) => {
  return (
    <p style={{ fontSize: fontSize }} className="p">
      {text}
    </p>
  );
};

export default Paragraph;
