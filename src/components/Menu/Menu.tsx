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
                <li><a href="#about">Sobre</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    );
}

export { Menu };
