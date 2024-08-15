import React from 'react';
import Icon from '../Icon/Icon.jsx';
import styles from './FilmItem.module.css';

const FilmItem = ({ title, rating, posterUrl }) => {
  return (
    <div className={styles.film}>
      <div className={styles['film__rating-wrapper']}>
        <span className={styles['film__rating']}>{rating}</span>
      </div>
      <img className={styles['film__img']} src={posterUrl} alt={`Постер фильма ${title}`} />
      <div className={styles['film__title-wrapper']}>
        <p className={styles['film__title']}>{title}</p>
        <a className={styles['film__favourites-block']} href="#">
          <Icon alt="Иконка лайка" src="./src/assets/like.svg" />
          <span className={styles['film__favourites']}>В избранное</span>
        </a>
      </div>
    </div>
  );
};

export default FilmItem;
