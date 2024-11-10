export const validateTripForm = (formData) => {
    const { origen, destino, fecha, hora, peso, precio } = formData;
  
    if (!origen || !destino || !fecha || !hora || !peso || !precio) {
      return "Todos los campos son obligatorios.";
    }
    if (peso <= 0) {
      return "El peso debe ser mayor que 0.";
    }
    if (precio <= 0) {
      return "El precio debe ser mayor que 0.";
    }
  
    return null; // Sin errores
  };