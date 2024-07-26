import './Box.scss';

interface BoxProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined';
}

const Box = (props: BoxProps) => {
  const {
    children, 
    variant = "outlined"
  } = props;

  return (
    <div className={`box ${variant}`}>
      {children}
    </div>
  );
};

export { Box }