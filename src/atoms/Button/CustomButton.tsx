import "./CustomButton.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "transparent";
  size?: "small" | "medium" | "large"; 
  disabled?: boolean; 
  onClick?: () => void;
  style?: React.CSSProperties;
}

const CustomButton = ({ children, size="medium", variant="primary", disabled, onClick, style }: ButtonProps) => {
    const buttonClasses = `button button--${variant} button--${size} ${disabled ? 'disabled' : ''}`
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={buttonClasses}
      style={style}
    >
      {children}
    </button> 
  )
}

export default CustomButton