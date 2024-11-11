import React, { useState } from 'react';
import FormField from './contexts/FormField';
import { validateTripForm } from './contexts/ValidateTripForm';

const NewTripForm = () => {
  const [formData, setFormData] = useState({
    startingPoint: "",  // Origen
    destination: "",    // Destino
    departureDate: "",  // Fecha de partida
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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

    // Construimos la solicitud, incluyendo los campos automáticos
    const requestData = {
      startingPoint: formData.startingPoint,
      destination: formData.destination,
      departureDate: formData.departureDate,
      truckDriverId: 2, // Automáticamente asignado
      clientId: 3,       // Automáticamente asignado
      bill: {
        amount: 25000,   // Automáticamente asignado
        payState: 0,     // Automáticamente asignado
      },
    };

    try {
      const response = await fetch(`${API_URL}Trip`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData), // Convertimos a JSON
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al agregar el viaje");
      }

      setSuccess(true); // Indicar éxito
      alert("Viaje creado exitosamente");

      // Limpiar el formulario después de enviar
      setFormData({
        startingPoint: "",
        destination: "",
        departureDate: "",
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
          {/* Campo de Origen */}
          <FormField
            name="startingPoint"
            label="Origen"
            value={formData.startingPoint}
            onChange={handleChange}
          />
          
          {/* Campo de Destino */}
          <FormField
            name="destination"
            label="Destino"
            value={formData.destination}
            onChange={handleChange}
          />
          
          {/* Campo de Fecha de Partida */}
          <FormField
            name="departureDate"
            label="Fecha de partida"
            type="date" // Selector de fecha
            value={formData.departureDate}
            onChange={handleChange}
          />
          <FormField
            name="weight"
            label="Peso de mercaderia"
            value={formData.weight}
            onChange={handleChange}
          />
          <FormField
            name="price"
            label="Precio de mercaderia"
            value={formData.price}
            onChange={handleChange}
          />
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

