import React from "react";

const FormField = ({ name, label, type = "text", value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label || name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <input
        type={type} // Usamos directamente el tipo pasado en el prop
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="form-control"
        placeholder={`Introduce ${label || name.toLowerCase()}`}
      />
    </div>
  );
};

export default FormField;
