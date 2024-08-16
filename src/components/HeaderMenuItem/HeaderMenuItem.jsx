import React from 'react';
import styles from './HeaderMenuItem.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HeaderMenuItem = ({ children, isActive, icon, onClick }) => {
  const linkClass = cx({
    'header-menu__link': true,
    'header-menu__link--active': isActive,
  });

  return (
    <li>
      <a onClick={onClick} href="#" className={linkClass}>
        {children}
        {icon}
      </a>
    </li>
  );
};

export default HeaderMenuItem;
