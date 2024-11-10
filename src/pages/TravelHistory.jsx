import React from "react";
import AdminLayout from "../components/AdminLayout";  
import TravelHistoryForm from "../components/TravelHistoryForm";

const TravelHistory = () => (
  <AdminLayout>
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <TravelHistoryForm />
        </div>
      </section>
    </div>
  </AdminLayout>
);

export default TravelHistory;