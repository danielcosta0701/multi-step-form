import React from 'react';
import './Container.scss';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties; // Adiciona a propriedade style
}

const Container = (props: ContainerProps) => {
    const {
        children,
        className,
        style,
    } = props;

    return (
        <div className={`container ${className}`} style={style}>
            {children}
        </div>
    );
}

const ContainerLeft = (props: ContainerProps) => {
    const {
        children,
        className,
        style,
    } = props;

    return (
        <div className={`container__left ${className}`} style={style}>
            {children}
        </div>
    );
}

const ContainerRight = (props: ContainerProps) => {
    const {
        children,
        className,
        style,
    } = props;

    return (
        <div className={`container__right ${className}`} style={style}>
            {children}
        </div>
    );
}

Container.Left = ContainerLeft;
Container.Right = ContainerRight;

export { Container };
