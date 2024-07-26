import './RightContainer.scss';

interface RightContainerProps {
    children: React.ReactNode;
    className?: string;
}

const RightContainer = (props: RightContainerProps) => {
    const {
        children,
        className
    } = props;

    return (
        <div className={`right-container ${className}`}>
            {children}
        </div>
    );
}

export { RightContainer };
