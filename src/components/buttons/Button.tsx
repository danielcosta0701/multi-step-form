import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "reset" | "submit";
    disabled?: boolean;
    onClick?: () => void;
} 

const Button = (props: ButtonProps) => {
    const {
        children,
        type = "button",
        disabled,
        onClick,
    } = props;


    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
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
        <span>
            { children }
        </span>
    );
}

Button.Text = ButtonText;

export { Button }
