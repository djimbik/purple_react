import React from 'react';
import './Header.css';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Favourites from '../../components/Favourites/Favourites.jsx';

const Header = () => {
  return (
    <header className={'header'}>
      <Favourites />
      <HeaderMenu isAuthenticated={false} />
    </header>
  );
};

export default Header;
