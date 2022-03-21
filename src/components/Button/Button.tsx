import {FC} from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  variant?: 'square' | 'primary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';
}

const Button: FC<ButtonProps> = ({ 
  onClick = f => f, 
  variant = 'primary', 
  size = 'medium', 
  type = 'button', 
  children 
}) => {
  
  const mainCn = cn(s.button, s[size], s[variant]);

  return (
    <button className={mainCn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
