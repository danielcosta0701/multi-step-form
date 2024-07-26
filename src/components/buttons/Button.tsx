import React from 'react';
import './Button.scss';

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "reset" | "submit";
    disabled?: boolean;
    onClick?: () => void;
    variant?: "filled" | "outlined";
} 

const Button = (props: ButtonProps) => {
    const {
        children,
        type = "button",
        disabled,
        onClick,
        variant = "filled", 
    } = props;

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`button ${variant}`}
        >
            { children }
        </button>
    );
}

const ButtonText = (props: ButtonProps) => {
    const {
        children
    } = props;

    return (
        <span className="button-text">
            { children }
        </span>
    );
}

Button.Text = ButtonText;

export { Button };
