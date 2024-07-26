import React from 'react';
import './LeftContainer.scss';

interface LeftContainerProps {
    children: React.ReactNode;
    className?: string;
}

const LeftContainer = ({ children, className = "" }: LeftContainerProps) => {
    return (
        <div className={`left-container ${className}`}>
            {children}
        </div>
    );
}

export { LeftContainer };
