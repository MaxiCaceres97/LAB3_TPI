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
                        <h2>Manage Bills</h2>
                        <BillForm onSubmit={addBill} />
                        <h3>Bill List</h3>
                        <ul>
                            {bills.length === 0 ? (
                                <li>No bills available</li>
                            ) : (
                                bills.map((bill) => (
                                    <li key={bill.id}>
                                        ID: {bill.id}, Amount: ${bill.amount.toFixed(2)}, Status:{" "}
                                        {bill.payState === "pago" ? "Paid" : "Not Paid"}
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
};

export default Bill;