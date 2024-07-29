import './Header.scss';

interface HeaderProps {
    logo: React.ReactNode;
    className?: string;
}

const Header = (props: HeaderProps) => {
    const {
        logo, 
        className
    } = props;

    return (
        <header className={`header ${className}`}>
            <div className="header-logo">
                {logo}
            </div>
        </header>
    );
}

export { Header };
