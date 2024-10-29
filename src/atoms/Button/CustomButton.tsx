import "./CustomButton.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "transparent" | "industry";
  size?: "small" | "medium" | "large"; 
  disabled?: boolean; 
  onClick?: () => void;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

const CustomButton = ({ icon, children, size="medium", variant="primary", disabled, onClick, style }: ButtonProps) => {
    const buttonClasses = `button button--${variant} button--${size} ${disabled ? 'disabled' : ''}`
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={buttonClasses}
      style={style}
    >
      {icon && <span className="buttonIcon">{icon}</span>}
      {children}
    </button> 
  )
}

export default CustomButton