import React, { FC, useState, useEffect } from 'react';
import { BsMoonFill, BsMoon } from 'react-icons/bs';

import { Button } from '../../';
import { IMenuList } from '../NavBar'

import s from './Menu.module.scss';

interface MenuProps {
  links: IMenuList[];
  handleLogin: () => void;
  handleSignup: () => void;
}

const Menu: FC<MenuProps> = ({ 
  links = [],
  handleLogin, 
  handleSignup 
}) => {

  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme])

  const token = null;

  const handleLogout = () => {
    console.log('Logout');
  };

  const fetchThemes = theme === 'light' ? 'dark' : 'light'

  const handleTheme = () => setTheme(fetchThemes);

  return (
    <div className={s.menu}>

      <div className={s.pages}>
        {links.map(({ url, text }, idx) => (
          <a key={idx} href={url} className={s.link}>
            {text}
          </a>
        ))}
      </div>

      <div 
        className={s.theme}
        onClick={handleTheme}
      >
          {theme === 'light' 
            ? <BsMoonFill size='18px'/>
            : <BsMoon size='18px'/>
          }
        <span>to {fetchThemes}</span>
      </div>

      <div className={s.login}>
        {token ? (
          <Button onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Button onClick={handleLogin} variant='outline'>
              Login
            </Button>
            <Button onClick={handleSignup}>
              Signup
            </Button>
          </>
        )}
      </div>

    </div>
  );
}

export default Menu;
