import React, { useState } from 'react';
import FormField from './contexts/FormField';
import { validateTripForm } from './contexts/ValidateTripForm';


const NewTripForm = () => {
  const [formData, setFormData] = useState({
    origen: "",
    destino: "",
    fecha: "",
    hora: "",
    peso: "",
    precio: "",
  });

  const [loading, setLoading] = useState(false); // Indicar estado de carga
  const [error, setError] = useState(null); // Manejar errores
  const [success, setSuccess] = useState(false); // Mostrar éxito

  const API_URL = import.meta.env.VITE_API_URL || "https://localhost:7175/api/";

  // Maneja los cambios en los campos del formulario
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const validationError = validateTripForm(formData);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}Trip`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convertir datos a JSON
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al agregar el viaje");
      }

      const data = await response.json();
      setSuccess(true); // Indicar éxito
      alert("Viaje creado exitosamente");

      // Limpiar el formulario después de enviar
      setFormData({
        origen: "",
        destino: "",
        fecha: "",
        hora: "",
        peso: "",
        precio: "",
      });
    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false); // Finalizar estado de carga
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-trip-form">
      <div className="card">
        <div className="card-header bg-primary">
          <h3 className="card-title">Agregar Nuevo Viaje</h3>
        </div>
        <div className="card-body">
          {["origen", "destino", "fecha", "hora", "peso", "precio"].map((field) => (
            <FormField
              key={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
          ))}
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Agregando..." : "Agregar Viaje"}
          </button>
          {error && <p className="text-danger mt-2">{error}</p>}
          {success && <p className="text-success mt-2">¡Viaje agregado con éxito!</p>}
        </div>
      </div>
    </form>
  );
};

export default NewTripForm;