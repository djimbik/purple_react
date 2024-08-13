import React from 'react';
import FilmItem from '../FilmItem/FilmItem.jsx';
import './Films.css';

const Films = ({ films }) => {
  return (
    <ul className="film-list">
      {films.map((film) => (
        <li key={film.title}>
          <FilmItem {...film} />
        </li>
      ))}
    </ul>
  );
};

export default Films;
