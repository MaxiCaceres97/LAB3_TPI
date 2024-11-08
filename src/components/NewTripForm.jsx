import React, { useState } from 'react';

const NewTripForm = () => {
  const [formData, setFormData] = useState({
    origen: '',
    destino: '',
    fecha: '',
    hora: '',
    peso: '',
    precio: ''
  });

  // Maneja el cambio de los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado', formData);
    // Aquí puedes enviar los datos a tu API o procesarlos de la manera que necesites.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Nuevo Viaje</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="origen">Origen</label>
            <input
              type="text"
              id="origen"
              name="origen"
              value={formData.origen}
              onChange={handleChange}
              className="form-control"
              placeholder="Introduce el origen del viaje"
            />
          </div>

          <div className="form-group">
            <label htmlFor="destino">Destino</label>
            <input
              type="text"
              id="destino"
              name="destino"
              value={formData.destino}
              onChange={handleChange}
              className="form-control"
              placeholder="Introduce el destino del viaje"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fecha">Fecha</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="hora">Hora</label>
            <input
              type="time"
              id="hora"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="peso">Peso de la Mercadería (kg)</label>
            <input
              type="number"
              id="peso"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              className="form-control"
              placeholder="Introduce el peso de la mercadería"
            />
          </div>

          <div className="form-group">
            <label htmlFor="precio">Precio de la Mercadería (USD)</label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              className="form-control"
              placeholder="Introduce el precio de la mercadería"
            />
          </div>
        </div>

        <div className="card-footer">
          <button type="submit" className="btn btn-primary">Agregar Viaje</button>
        </div>
      </div>
    </form>
  );
};

export default NewTripForm;
