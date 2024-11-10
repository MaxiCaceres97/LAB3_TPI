import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const TravelHistoryForm = () => {
  const [trips, setTrips] = useState([]); // Estado para almacenar los viajes
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de errores

  const API_URL = import.meta.env.VITE_API_URL || "https://localhost:7175/api/";

  // Cargar el historial de viajes desde la API
  useEffect(() => {
    const fetchTravelHistory = async () => {
      try {
        const response = await fetch(`${API_URL}Trip`);
        if (!response.ok) {
          throw new Error("Error al cargar el historial de viajes.");
        }
        const data = await response.json();
        // Convertir departureDate a un formato legible si es necesario
        const formattedTrips = data.map((trip) => ({
          ...trip,
          departureDate: new Date(trip.departureDate).toLocaleString(),
        }));
        setTrips(formattedTrips); // Guardar los viajes en el estado
      } catch (err) {
        console.error("Error al obtener el historial:", err.message);
        setError(err.message);
      } finally {
        setLoading(false); // Finalizar el estado de carga
      }
    };

    fetchTravelHistory();
  }, [API_URL]);

  const columnas = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Punto de Partida", selector: (row) => row.startingPoint, sortable: true },
    { name: "Destino", selector: (row) => row.destination, sortable: true },
    { name: "Fecha de Salida", selector: (row) => row.departureDate, sortable: true },
    { name: "ID del Conductor", selector: (row) => row.truckDriverId, sortable: true },
    { name: "ID del Cliente", selector: (row) => row.clientId, sortable: true },
    { name: "ID de la Factura", selector: (row) => row.billId || "Sin Factura", sortable: true },
  ];

  return (
    <div className="travel-history-container">
      <h2 style={{ textAlign: "center" }}>Historial de Viajes</h2>
      <hr />
      {loading && <p>Cargando historial de viajes...</p>}
      {error && <p className="text-danger">Error: {error}</p>}
      {!loading && !error && (
        <DataTable
          columns={columnas}
          data={trips}
          pagination
          highlightOnHover
        />
      )}
    </div>
  );
};

export default TravelHistoryForm;