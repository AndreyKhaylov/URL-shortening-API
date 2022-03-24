import {FC} from 'react';
import cn from 'classnames';

const s = require("./Button.module.scss") as any;

interface ButtonProps {
  onClick: () => void;
  variant?: 'square' | 'primary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';
}

const Button: FC<ButtonProps> = ({ 
  onClick = (f:void) => f, 
  variant = 'primary',
  size = 'medium', 
  type = 'button', 
  children 
}) => {
  
  const mainCn = cn(s.button, s[size], s[variant]);

  const handleClick = () => onClick
  return (
    <button 
      className={mainCn} 
      type={type} 
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
