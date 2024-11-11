import React, { useState } from "react";
import DataTable from "react-data-table-component";

const TravelHistoryForm = () => {
  const [trips] = useState([
    {
      id: 1,
      startingPoint: "Rosario",
      destination: "Buenos Aires",
      departureDate: "2024-11-11 15:29:04",
      truckDriverName: "Juan Pérez",
      clientName: "María García",
      billId: 101,
    },
    {
      id: 2,
      startingPoint: "Córdoba",
      destination: "Mendoza",
      departureDate: "2024-11-12 10:00:00",
      truckDriverName: "Carlos López",
      clientName: "Luis Fernández",
      billId: 102,
    },
    {
      id: 3,
      startingPoint: "Salta",
      destination: "Tucumán",
      departureDate: "2024-11-13 14:15:00",
      truckDriverName: "Pedro González",
      clientName: "Ana Martínez",
      billId: 103,
    },
    {
      id: 4,
      startingPoint: "Santa Fe",
      destination: "La Plata",
      departureDate: "2024-11-14 09:30:00",
      truckDriverName: "José Ramírez",
      clientName: "Laura Ortiz",
      billId: 104,
    },
    {
      id: 5,
      startingPoint: "Mar del Plata",
      destination: "Bahía Blanca",
      departureDate: "2024-11-15 11:45:00",
      truckDriverName: "Miguel Díaz",
      clientName: "Silvia Rodríguez",
      billId: 105,
    },
    {
      id: 6,
      startingPoint: "Neuquén",
      destination: "Bariloche",
      departureDate: "2024-11-16 08:20:00",
      truckDriverName: "Alberto Suárez",
      clientName: "Ignacio Morales",
      billId: 106,
    },
    {
      id: 7,
      startingPoint: "Jujuy",
      destination: "Salta",
      departureDate: "2024-11-17 13:45:00",
      truckDriverName: "Raúl Castro",
      clientName: "Emilia Vázquez",
      billId: 107,
    },
    {
      id: 8,
      startingPoint: "Río Gallegos",
      destination: "Ushuaia",
      departureDate: "2024-11-18 09:00:00",
      truckDriverName: "Francisco Núñez",
      clientName: "Cecilia Torres",
      billId: 108,
    },
    {
      id: 9,
      startingPoint: "San Juan",
      destination: "La Rioja",
      departureDate: "2024-11-19 17:30:00",
      truckDriverName: "Oscar Ortiz",
      clientName: "Graciela Pérez",
      billId: 109,
    },
    {
      id: 10,
      startingPoint: "Posadas",
      destination: "Resistencia",
      departureDate: "2024-11-20 06:50:00",
      truckDriverName: "Manuel Sosa",
      clientName: "José Moreno",
      billId: 110,
    },
    {
      id: 11,
      startingPoint: "San Luis",
      destination: "Villa Mercedes",
      departureDate: "2024-11-21 12:10:00",
      truckDriverName: "Luis Herrera",
      clientName: "Verónica Castro",
      billId: 111,
    },
    {
      id: 12,
      startingPoint: "Formosa",
      destination: "Corrientes",
      departureDate: "2024-11-22 14:25:00",
      truckDriverName: "Diego Ramírez",
      clientName: "Fernando Gómez",
      billId: 112,
    },
    {
      id: 13,
      startingPoint: "Santiago del Estero",
      destination: "Catamarca",
      departureDate: "2024-11-23 11:40:00",
      truckDriverName: "Andrés Romero",
      clientName: "Paula Medina",
      billId: 113,
    },
    {
      id: 14,
      startingPoint: "Concordia",
      destination: "Paraná",
      departureDate: "2024-11-24 16:05:00",
      truckDriverName: "Ricardo López",
      clientName: "Luciana Delgado",
      billId: 114,
    },
    {
      id: 15,
      startingPoint: "Esquel",
      destination: "Puerto Madryn",
      departureDate: "2024-11-25 07:55:00",
      truckDriverName: "Héctor Álvarez",
      clientName: "Nicolás Díaz",
      billId: 115,
    },
    
    
    
  ]);

  const columnas = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Punto de Partida", selector: (row) => row.startingPoint, sortable: true },
    { name: "Destino", selector: (row) => row.destination, sortable: true },
    { name: "Fecha de Salida", selector: (row) => row.departureDate, sortable: true },
    { name: "Conductor", selector: (row) => row.truckDriverName, sortable: true },
    { name: "Cliente", selector: (row) => row.clientName, sortable: true },
    { name: "ID de la Factura", selector: (row) => row.billId || "Sin Factura", sortable: true },
  ];

  return (
    <div
      style={{
        margin: "40px auto 0px -50px",
        padding: "10px",
        maxWidth: "90%",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      }}
    >
      <h2 style={{ textAlign: "center" }}>Historial de Viajes</h2>
      <hr />
      <DataTable
        columns={columnas}
        data={trips}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default TravelHistoryForm;
