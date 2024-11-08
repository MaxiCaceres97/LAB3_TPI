import React from 'react';
import AdminLayout from '../components/AdminLayout';

const Home = () => (
  <AdminLayout>
    <div className="home-content">
      <h1>LOGITRANSPORTE</h1>
      <br />
      <h3>NUESTRA HISTORIA</h3>
      <br />
      <p style={{ fontSize: "21px", lineHeight: "1.6" }}>LogiTransportes comenzó en 1990, pero su origen se remonta a los años 50, cuando Jorge Martínez, con una simple camioneta, inició el transporte de mercaderías en San Antonio de Areco. Junto a su esposa Ana, enfrentaron largas rutas y desafíos, y en 1972 compraron su primer camión, un Mercedes-Benz L1114, lo que les permitió crecer poco a poco.</p>
      <p style={{ fontSize: "21px", lineHeight: "1.6" }}>En 1990 formalizaron su empresa y establecieron su primera sede en Pilar, con una sucursal en Córdoba que se convirtió en un punto clave para sus operaciones. A lo largo de los años, LogiTransportes amplió su flota y adoptó nuevas tecnologías de logística.</p>
      <p style={{ fontSize: "21px", lineHeight: "1.6" }}>Hoy, con más de 300 empleados y una red que cubre todo el país, LogiTransportes sigue avanzando, con la misma dedicación y compromiso que Jorge y Ana tuvieron desde el principio.</p>
    </div>
  </AdminLayout>
);

export default Home;
