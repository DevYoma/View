import React from "react";
import "./RadioInput.scss";

interface RadioOption {
  label: string;
  value: string;
}

interface CustomRadioProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  styles?: React.CSSProperties;
}

const RadioInput: React.FC<CustomRadioProps> = ({ options, selectedValue, onChange, name }) => {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <label
          key={option.value}
          className={`radio-label ${
            selectedValue === option.value ? "selected" : ""
          }`}
          style={{
            border: "1px solid lightgray",
          }}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="radio-input"
          />
          <span className="radio-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioInput;
