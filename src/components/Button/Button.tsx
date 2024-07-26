import './Button.scss';

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "reset" | "submit";
    disabled?: boolean;
    onClick?: () => void;
    variant?: "filled" | "outlined";
    className?: string;
} 

const Button = (props: ButtonProps) => {
    const {
        children,
        type = "button",
        disabled,
        onClick,
        variant = "filled",
        className
    } = props;

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`button ${variant} ${className}`}
        >
            { children }
        </button>
    );
}

const ButtonText = (props: ButtonProps) => {
    const {
        children,
        className
    } = props;

    return (
        <span className={`button-text ${className}`}>
            { children }
        </span>
    );
}

Button.Text = ButtonText;

export { Button };
