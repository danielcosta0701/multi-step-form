import React from 'react';
import './Box.scss';

interface BoxProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined';
}

export const Box: React.FC<BoxProps> = ({ children, variant = 'outlined' }) => {
  return (
    <div className={`box ${variant}`}>
      {children}
    </div>
  );
};
