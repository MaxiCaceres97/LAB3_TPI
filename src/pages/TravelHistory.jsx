import React from 'react';
import DataTable from 'react-data-table-component';
import AdminLayout from '../components/AdminLayout';


const TravelHistory = () => {
  // Ejemplo de datos para la tabla
  const viajes = [
    { id: 1, origen: 'Buenos Aires', destino: 'Córdoba', fecha: '2024-11-08', hora: '10:00' },
    { id: 2, origen: 'Rosario', destino: 'Mendoza', fecha: '2024-11-09', hora: '12:00' },
    // Agrega más datos de ejemplo
  ];

  const columnas = [
    { name: 'ID', selector: row => row.id, sortable: true },
    { name: 'Origen', selector: row => row.origen, sortable: true },
    { name: 'Destino', selector: row => row.destino, sortable: true },
    { name: 'Fecha', selector: row => row.fecha, sortable: true },
    { name: 'Hora', selector: row => row.hora, sortable: true },
  ];

  return (
    <AdminLayout>
      <div className="travel-history-container">
        <section className="content">
          <div className="container-fluid">
            <h2 style={{ textAlign: 'center' }}>Historial de Viajes</h2>
            <hr />
            <DataTable
              columns={columnas}
              data={viajes}
              pagination
              highlightOnHover
            />
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default TravelHistory;
