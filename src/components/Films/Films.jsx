import React from 'react';
import FilmItem from '../FilmItem/FilmItem.jsx';
import styles from './Films.module.css';

const Films = ({ films }) => {
  return (
    <ul className={styles['film-list']}>
      {films.map((film) => (
        <li key={film.title}>
          <FilmItem {...film} />
        </li>
      ))}
    </ul>
  );
};

export default Films;
