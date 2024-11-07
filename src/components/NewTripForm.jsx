import React, { useState } from 'react';

const NewTripForm = ({ onAddTrip }) => {
  const [tripData, setTripData] = useState({
    destination: '',
    date: '',
    cargo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTrip(tripData);
    setTripData({ destination: '', date: '', cargo: '' }); // Limpia el formulario después de agregar
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Destino:</label>
        <input
          type="text"
          name="destination"
          value={tripData.destination}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Fecha:</label>
        <input
          type="date"
          name="date"
          value={tripData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Carga:</label>
        <input
          type="text"
          name="cargo"
          value={tripData.cargo}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Agregar Viaje</button>
    </form>
  );
};

export default NewTripForm;