import React, { useState } from 'react';
import Header from '../layouts/Header/Header.jsx';
import Title from '../components/Title/Title.jsx';
import Paragraph from '../components/Paragraph/Paragraph.jsx';
import SearchForm from '../components/SearchForm/SearchForm.jsx';
import FilmItem from '../components/FilmItem/FilmItem.jsx';
import Films from '../components/Films/Films.jsx';

const INITIAL_STATE = [
  {
    title: 'Inception',
    rating: 8.8,
    posterUrl: './src/assets/films/Inception.jpg',
  },
  {
    title: 'The Dark Knight',
    rating: 9.0,
    posterUrl: './src/assets/films/Knight.jpg',
  },
  {
    title: 'Interstellar',
    rating: 8.6,
    posterUrl: './src/assets/films/Interstellar.jpg',
  },
  {
    title: 'The Matrix',
    rating: 8.7,
    posterUrl: './src/assets/films/Matrix.jpg',
  },
  {
    title: 'Pulp Fiction',
    rating: 8.9,
    posterUrl: './src/assets/films/PulpFiction.jpg',
  },
  {
    title: 'Fight Club',
    rating: 8.8,
    posterUrl: './src/assets/films/Club.jpg',
  },
  {
    title: 'The Shawshank Redemption',
    rating: 9.3,
    posterUrl: './src/assets/films/Shawshank.jpg',
  },
  {
    title: 'Forrest Gump',
    rating: 8.8,
    posterUrl: './src/assets/films/Forrest.jpg',
  },
];

const Main = () => {
  const [films, setFilms] = useState(INITIAL_STATE);
  return (
    <>
      <Header />
      <Title text={'Поиск'} />
      <Paragraph
        text={
          'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
        }
        fontSize={16}
      />
      <SearchForm />
      <Films films={films} />
    </>
  );
};

export default Main;
