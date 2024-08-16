import React from 'react';
import styles from './Paragraph.module.css';

const Paragraph = ({ text, fontSize }) => {
  return (
    <p style={{ fontSize: fontSize }} className={styles.p}>
      {text}
    </p>
  );
};

export default Paragraph;
