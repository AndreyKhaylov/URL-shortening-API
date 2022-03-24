import {FC} from 'react';

import { Button } from '../../';

const s = require('./Menu.module.scss');

interface MenuProps {
  links: [];
  handleLogin: () => boolean;
  handleSignup: () => boolean;
}

const Menu: FC<MenuProps> = ({ 
  links = [], 
  handleLogin, 
  handleSignup 
}) => {
  
  const token = null;

  const handleLogout = () => {
    console.log('Logout');
  };

  return (
    <div className={s.menu}>
      <div className={s.pages}>
        {links.map(({ url, text }, idx) => (
          <a key={idx} href={url} className={s.link}>
            {text}
          </a>
        ))}
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
