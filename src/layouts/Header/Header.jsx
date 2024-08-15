import React from 'react';
import styles from './Header.module.css';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Favourites from '../../components/Favourites/Favourites.jsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <Favourites />
      <HeaderMenu />
    </header>
  );
};

export default Header;
