import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";  
import BillForm from "../components/BillForm";  

const Bill = () => {
    const [bills, setBills] = useState([]);

    const addBill = (newBill) => {
        setBills([...bills, newBill]);
    };

    return (
        <AdminLayout>
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        
                        <BillForm onSubmit={addBill} />
                        
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
};

export default Bill;