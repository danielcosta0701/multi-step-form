import React from 'react';
import './Container.scss';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = (props: ContainerProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    );
}

const ContainerLeft = (props: ContainerProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <div className={`container__left ${className}`}>
            {children}
        </div>
    );
}

const ContainerRight = (props: ContainerProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <div className={`container__right ${className}`}>
            {children}
        </div>
    );
}

Container.Left = ContainerLeft;
Container.Right = ContainerRight;

export { Container };
