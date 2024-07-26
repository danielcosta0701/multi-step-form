import React from 'react';
import './RightContainer.scss';

interface RightContainerProps {
    children: React.ReactNode;
    className?: string;
}

const RightContainer = ({ children, className = "" }: RightContainerProps) => {
    return (
        <div className={`right-container ${className}`}>
            {children}
        </div>
    );
}

export { RightContainer };
