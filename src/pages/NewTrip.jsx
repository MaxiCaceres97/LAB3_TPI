import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import NewTripForm from '../components/NewTripForm';

const NewTrip = () => {
  const [trips, setTrips] = useState([]);

  const handleAddTrip = (tripData) => {
    setTrips([...trips, tripData]);
  };

  return (
    <AdminLayout>
      <h2>Agregar Nuevo Viaje</h2>
      <NewTripForm onAddTrip={handleAddTrip} />
    </AdminLayout>
  );
};

export default NewTrip;
