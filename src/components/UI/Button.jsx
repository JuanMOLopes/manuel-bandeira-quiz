import React from 'react';
import '../../styles/components/Button.css';

const Button = ({
  children,
  onClick,
  className = '',
  size = 'medium',
  variant = 'primary',
  disabled = false,
  type = 'button'
}) => {
  const buttonClasses = [
    'button',
    `button--${size}`,
    `button--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="button-content">
        {children}
      </span>
      <div className="button-glow"></div>
    </button>
  );
};

export default Button;