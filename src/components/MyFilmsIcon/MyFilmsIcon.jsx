import React from 'react';

const MyFilmsIcon = ({ countFilms }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#7B6EF6" />
      <text
        x="12"
        y="16"
        fontFamily="Arial"
        fontSize="12"
        fill="white"
        textAnchor="middle"
        alignmentBaseline="auto">
        {countFilms}
      </text>
    </svg>
  );
};

export default MyFilmsIcon;
