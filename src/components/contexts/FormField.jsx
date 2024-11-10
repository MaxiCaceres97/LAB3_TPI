import React from "react";

const FormField = ({ name, value, onChange }) => {
  const getFieldType = () => {
    if (name === "peso" || name === "precio") return "number";
    if (name === "fecha") return "date";
    if (name === "hora") return "time";
    return "text";
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <input
        type={getFieldType()}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="form-control"
        placeholder={`Introduce ${name}`}
      />
    </div>
  );
};

export default FormField;