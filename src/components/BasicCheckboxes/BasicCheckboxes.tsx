import React, { useState } from "react";

type SelectedState = {
  checkbox1: boolean;
  checkbox2: boolean;
  checkbox3: boolean;
  checkbox4: boolean;
  checkbox5: boolean;
  checkbox6: boolean;
};

const BasicCheckboxes = () => {
  const [selected, setSelected] = useState<SelectedState>({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelected((prevSelected) => ({
      ...prevSelected,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h3>Select Options:</h3>
      {Object.keys(selected).map((checkbox, index) => (
        <label key={index} style={{ display: "block", marginBottom: "8px" }}>
          <input
            type="checkbox"
            name={checkbox}
            checked={selected[checkbox as keyof SelectedState] || false}
            onChange={handleChange}
          />
          {`Option ${index + 1}`}
        </label>
      ))}
    </div>
  );
};

export default BasicCheckboxes;
