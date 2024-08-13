import React from 'react';
import './HeaderMenu.css';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem.jsx';
import MyFilmsIcon from '../MyFilmsIcon/MyFilmsIcon.jsx';
import Icon from '../Icon/Icon.jsx';

const HeaderMenu = ({ isAuthenticated, user }) => {
  return (
    <nav>
      <ul className="header-menu">
        <HeaderMenuItem isActive={true}>Поиск Фильмов</HeaderMenuItem>
        <HeaderMenuItem icon={<MyFilmsIcon countFilms={5} />}>Мои фильмы</HeaderMenuItem>

        {isAuthenticated ? (
          <>
            <HeaderMenuItem icon={<Icon src={'./src/assets/user.svg'} alt={'иконка входа'} />}>
              {user.name}
            </HeaderMenuItem>
            <HeaderMenuItem>Выйти</HeaderMenuItem>
          </>
        ) : (
          <HeaderMenuItem icon={<Icon src={'./src/assets/enter.svg'} alt={'иконка входа'} />}>
            Войти
          </HeaderMenuItem>
        )}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
