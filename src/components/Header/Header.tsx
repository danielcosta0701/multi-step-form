import React from 'react';
import { Menu } from '../Menu/Menu';
import './Header.scss';

interface HeaderProps {
    logo: React.ReactNode;
    className?: string;
}

const Header = ({ logo, className = "" }: HeaderProps) => {
    return (
        <header className={`header ${className}`}>
            <div className="header-logo">
                {logo}
            </div>
            <Menu /> {/* Inclui o componente Menu */}
        </header>
    );
}

export { Header };
