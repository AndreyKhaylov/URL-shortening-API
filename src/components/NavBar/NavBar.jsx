import React from 'react';

import Menu from './Menu/Menu';

import s from './NavBar.module.scss';
import logo from '../../img/logo.svg';

const menuList = [
  {
    url: '#Features',
    text: 'Features',
  },
  {
    url: '#Prices',
    text: 'Prices',
  },
  {
    url: '#Resources',
    text: 'Resources',
  },
];

function NavBar() {
  return (
    <nav className={s.nav}>
      <div className='container'>
        <div className={s.logo}>
          <img className={s.logo} src={logo} alt='logo' />
        </div>
        <div className={s.menu}>
          <Menu links={menuList} handleLogin={openLogin} handleSignup={openSignup} />
          {/* <Modal />
          <Modal /> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
