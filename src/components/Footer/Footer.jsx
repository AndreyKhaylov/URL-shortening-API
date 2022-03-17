import s from './Footer.module.scss';

import { footer } from './data';

import { ReactComponent as Logo } from '../../img/logo.svg';

const Footer = () => {
  return (
    <footer className={s.Footer}>
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

const MenuGroup = ({ groupTitle, links }) => {
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
