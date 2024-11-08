import React from 'react';
import NewTripForm from '../components/NewTripForm';

const NewTrip = () => (
  <AdminLayout>
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <NewTripForm />
        </div>
      </section>
    </div>
  </AdminLayout>
);

export default NewTrip;
