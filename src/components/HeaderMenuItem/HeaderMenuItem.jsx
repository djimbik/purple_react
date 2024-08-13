import React from 'react';
import './HeaderMenuItem.css';

const HeaderMenuItem = ({ children, isActive, icon }) => {
  return (
    <li>
      <a href="#" className={`header-menu__link ${isActive ? 'header-menu__link--active' : ''} `}>
        {children}
        {icon}
      </a>
    </li>
  );
};

export default HeaderMenuItem;
