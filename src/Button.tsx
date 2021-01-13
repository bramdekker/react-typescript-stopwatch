import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string,
  onClick: () => void,  
};

export const Button: React.FC<ButtonProps> = ({text, onClick}) => {
    return (
      <button onClick={onClick} className="action-button">
        {text}
      </button>
    );
};