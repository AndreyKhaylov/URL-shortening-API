import React, { FC } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  variant?: 'square' | 'primary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ 
  onClick = (f:void) => f, 
  variant = 'primary',
  size = 'medium', 
  type = 'button',
  disabled = false,
  children 
}) => {
  
  const mainCn = cn(s.button, s[size], s[variant]);

  return (
    <button 
      className={mainCn} 
      type={type} 
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
