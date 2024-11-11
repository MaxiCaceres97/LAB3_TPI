// ValidateTripForm.jsx
export const validateTripForm = (formData) => {
  const { startingPoint, destination, departureDate } = formData;

  // Validación de los campos requeridos
  if (!startingPoint || !destination || !departureDate) {
    return "Todos los campos son obligatorios.";
  }

  return null; // Si no hay errores
};
