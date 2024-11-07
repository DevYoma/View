import { useState } from "react";
import "./CustomButton.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "transparent" | "industry" | "selectedIndustry";
  size?: "small" | "medium" | "large"; 
  disabled?: boolean; 
  onClick?: () => void;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  activeIcon?: React.ReactNode;
}

const CustomButton = ({ icon, children, size="medium", variant="primary", disabled, onClick, style, activeIcon }: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev); // Toggle active state
    if (onClick) onClick(); // Call external onClick handler
  };

  const buttonClasses = `button button--${variant} button--${size} ${disabled ? 'disabled' : ''} ${isActive ? 'active' : ''}`;
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={buttonClasses}
      style={style}
    >
      {/* {icon && <span className="buttonIcon">{icon}</span>} */}
      {isActive ? <span className="buttonIcon">{activeIcon}</span> : <span className="buttonIcon">{icon}</span>}
      {children}
    </button>
  );
}

export default CustomButton