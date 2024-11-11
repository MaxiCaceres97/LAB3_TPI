import React, { useState } from "react";

const BillForm = ({ onSubmit }) => {
    const [id, setId] = useState("");
    const [amount, setAmount] = useState(0);
    const [payState, setPayState] = useState("noPago");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id || amount <= 0) {
            setError("Please provide a valid ID and an amount greater than 0.");
            return;
        }
        setError("");
        onSubmit({
            id: parseInt(id),
            amount: parseFloat(amount),
            payState,
        });
        setId("");
        setAmount(0);
        setPayState("noPago");
    };

    return (
        <form onSubmit={handleSubmit} className="new-bill-form" style={{ maxWidth: "800px", margin: "50px auto 0px 100px" }}>
            <div className="card card-primary" style={{ padding: "20px" }}>
                <div className="card-header bg-primary" style={{ marginBottom: "15px" }}>
                    <h3 className="card-title" style={{ color: "#fff" }}>Agregar Factura</h3>
                </div>
                <div className="card-body">
                    {/* Campo ID */}
                    <div className="form-group" style={{ marginBottom: "15px" }}>
                        <label htmlFor="id" className="col-form-label">ID Viaje</label>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            className="form-control"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            required
                            style={{ width: "100%" }}
                        />
                    </div>

                    {/* Campo Amount */}
                    <div className="form-group" style={{ marginBottom: "15px" }}>
                        <label htmlFor="amount" className="col-form-label">Monto</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            className="form-control"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            style={{ width: "100%" }}
                        />
                    </div>

                    {/* Campo Payment Status */}
                    <div className="form-group" style={{ marginBottom: "15px" }}>
                        <label htmlFor="payState" className="col-form-label">Estado del pago</label>
                        <select
                            id="payState"
                            name="payState"
                            className="form-control"
                            value={payState}
                            onChange={(e) => setPayState(e.target.value)}
                            style={{ width: "100%" }}
                        >
                            <option value="noPago">No Pago</option>
                            <option value="pago">Pago</option>
                        </select>
                    </div>

                    {/* Mensaje de error */}
                    {error && <p className="text-danger">{error}</p>}
                </div>
                <div className="card-footer" style={{ textAlign: "center" }}>
                    <button type="submit" className="btn btn-primary">Agregar Factura</button>
                </div>
            </div>
        </form>
    );
};

export default BillForm;
