import React from 'react';
import Icon from '../Icon/Icon.jsx';
import './FilmItem.css';

const FilmItem = ({ title, rating, posterUrl }) => {
  return (
    <div className="film">
      <div className="film__rating-wrapper">
        <span className="film__rating">{rating}</span>
      </div>
      <img className="film__img" src={posterUrl} alt={`Постер фильма ${title}`} />
      <div className="film__title-wrapper">
        <p className="film__title">{title}</p>
        <a className="film__favourites-block" href="#">
          <Icon alt="Иконка лайка" src="./src/assets/like.svg" />
          <span className="film__favourites">В избранное</span>
        </a>
      </div>
    </div>
  );
};

export default FilmItem;
