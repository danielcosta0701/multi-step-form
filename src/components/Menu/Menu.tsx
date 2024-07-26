import './Menu.scss';

interface MenuProps {
    className?: string;
}

const Menu = (props: MenuProps) => {
    const {
        className
    } = props;

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
