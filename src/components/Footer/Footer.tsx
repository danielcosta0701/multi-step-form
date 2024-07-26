import React from 'react';
import './Footer.scss';

interface FooterProps {
    text: string; // Texto principal do rodapé
    className?: string; // Classe CSS adicional
}

const Footer = ({ text, className = "" }: FooterProps) => {
    return (
        <footer className={`footer ${className}`}>
            <div className="footer-content">
                <p>{text}</p>
            </div>
        </footer>
    );
}

export { Footer };
