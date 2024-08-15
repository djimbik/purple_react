import React, { useContext } from 'react';
import styles from './HeaderMenu.module.css';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem.jsx';
import MyFilmsIcon from '../MyFilmsIcon/MyFilmsIcon.jsx';
import Icon from '../Icon/Icon.jsx';
import useLocalStorage from '../../hooks/use-localstorage.hook.js';
import { UserContext } from '../../context/userContext.jsx';

const HeaderMenu = () => {
  const [data, saveData] = useLocalStorage('data');
  const { userData, setUserData } = useContext(UserContext);

  const onClickHandler = () => {
    const updatedData = data.map(item => {
      if (item.name === userData.name) {
        setUserData({
          name: userData.name,
          isAuth: false,
        });

        return {
          ...item,
          isLogined: false,
        };
      }
      return item;
    });
    saveData(updatedData);
  };

  return (
    <nav>
      <ul className={styles['header-menu']}>
        <HeaderMenuItem isActive={true}>Поиск Фильмов</HeaderMenuItem>
        <HeaderMenuItem icon={<MyFilmsIcon countFilms={5} />}>Мои фильмы</HeaderMenuItem>

        {userData.isAuth ? (
          <>
            <HeaderMenuItem icon={<Icon src={'./src/assets/user.svg'} alt={'иконка входа'} />}>
              {userData.name}
            </HeaderMenuItem>
            <HeaderMenuItem onClick={onClickHandler}>Выйти</HeaderMenuItem>
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
