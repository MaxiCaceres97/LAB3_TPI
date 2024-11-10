import React, { useState, useEffect } from "react";

const TripListForm = () => {
  const [trips, setTrips] = useState([]); // Estado para almacenar los viajes
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de errores

  const API_URL = import.meta.env.VITE_API_URL || "https://localhost:7175/api/";

  // Cargar los viajes desde la API
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(`${API_URL}Trip`);
        if (!response.ok) {
          throw new Error("Error al cargar los viajes.");
        }
        const data = await response.json();
        setTrips(data); // Guardar los viajes en el estado
      } catch (err) {
        console.error("Error al obtener los viajes:", err.message);
        setError(err.message);
      } finally {
        setLoading(false); // Finalizar el estado de carga
      }
    };

    fetchTrips();
  }, [API_URL]);

  // Función para editar un viaje
  const editTrip = (id) => {
    alert(`Editar viaje con ID: ${id}`);
    // Aquí puedes redirigir al usuario a un formulario de edición o mostrar un modal
    // Ejemplo de redirección:
    // window.location.href = `/edit-trip/${id}`;
  };

  // Función para eliminar un viaje
  const deleteTrip = async (id) => {
    const confirmDelete = window.confirm(
      `¿Estás seguro de que deseas eliminar el viaje con ID ${id}?`
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}Trip/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("No se pudo eliminar el viaje.");
      }

      alert(`Viaje con ID ${id} eliminado correctamente.`);
      setTrips(trips.filter((trip) => trip.id !== id)); // Actualizar la lista de viajes
    } catch (err) {
      console.error("Error al eliminar el viaje:", err.message);
      setError(err.message);
    }
  };

  if (loading) {
    return <p>Cargando viajes...</p>; // Mostrar mensaje de carga
  }

  if (error) {
    return <p className="text-danger">Error: {error}</p>; // Mostrar errores si ocurren
  }

  return (
    <div className="trip-list">
      <h2>Lista de Viajes</h2>
      {trips.length === 0 ? (
        <p>No hay viajes disponibles.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Punto de Partida</th>
              <th>Destino</th>
              <th>Fecha de Salida</th>
              <th>ID del Conductor</th>
              <th>ID del Cliente</th>
              <th>ID de la Factura</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.id}>
                <td>{trip.id}</td>
                <td>{trip.startingPoint}</td>
                <td>{trip.destination}</td>
                <td>{new Date(trip.departureDate).toLocaleString()}</td>
                <td>{trip.truckDriverId}</td>
                <td>{trip.clientId}</td>
                <td>{trip.billId || "Sin Factura"}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => editTrip(trip.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm ml-2"
                    onClick={() => deleteTrip(trip.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TripListForm;