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
                <a href="http://github.com/danielcosta0701">{text}</a>
            </div>
        </footer>
    );
}

export { Footer };
