import React from 'react';
import './Menu.scss';

interface MenuProps {
    className?: string;
}

const Menu = ({ className = "" }: MenuProps) => {
    return (
        <nav className={`menu ${className}`}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export { Menu };
