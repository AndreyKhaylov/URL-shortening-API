import cn from 'classnames';
import s from './Button.module.scss';

const Button = ({ onClick, variant = '', size = 'medium', type = 'button', children }) => {
  const mainCn = cn(s.button, s[size], s[variant]);

  return (
    <button className={mainCn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
