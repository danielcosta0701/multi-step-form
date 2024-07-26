import './Footer.scss';

interface FooterProps {
    text: string;
    className?: string;
}

const Footer = (props: FooterProps) => {
    const {
        text,
        className
    } = props;

    return (
        <footer className={`footer ${className}`}>
            <div className="footer-content">
                <p>{text}</p>
            </div>
        </footer>
    );
}

export { Footer };
