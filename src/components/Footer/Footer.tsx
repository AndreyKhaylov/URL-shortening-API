import React, { FC } from 'react';
import { footer } from './data';

import { ILinks } from './types';

import s from './Footer.module.scss';
import { ReactComponent as Logo } from '../../img/logo.svg';


interface MenuGroupProps {
  groupTitle: string;
  links: ILinks[],
}

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`${s.content} container`}>
        <Logo className={s.logo} />

        <div className={s.menu}>
          {footer.menu.map((menuItem) => (
            <MenuGroup key={menuItem.id} {...menuItem} />
          ))}
        </div>

        <div className={s.socials}>
          {footer.socials.map(({ id, url, image: Svg }) => (
            <a key={id} href={url}>
              <Svg />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

const MenuGroup: FC<MenuGroupProps> = ({ groupTitle, links }) => {
  return (
    <div className={s.menuGroup}>
      <h4>{groupTitle}</h4>
      {links.map(({ text, url }) => (
        <a key={text} href={url}>
          {text}
        </a>
      ))}
    </div>
  );
};

export default Footer;
