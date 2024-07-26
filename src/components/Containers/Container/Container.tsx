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

export { Container };
