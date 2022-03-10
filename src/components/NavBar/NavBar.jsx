import React from 'react';

import s from './NavBar.module.scss';

import logo from '../../img/logo.svg';

const menuList = [
  {
    to: '#',
    text: 'Features',
  },
  {
    to: '#',
    text: 'Prices',
  },
  {
    to: '#',
    text: 'Resources',
  },
];

function NavBar() {
  return (
    <nav className={s.nav}>
      <div className='container'>
        <div className={s.menu}>
          <img className={s.logo} src={logo} alt='logo' />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
