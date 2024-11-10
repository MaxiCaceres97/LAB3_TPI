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
        <form onSubmit={handleSubmit}>
            <div>
                <label>ID:</label>
                <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Payment Status:</label>
                <select
                    value={payState}
                    onChange={(e) => setPayState(e.target.value)}
                >
                    <option value="noPago">No Pago</option>
                    <option value="pago">Pago</option>
                </select>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Add Bill</button>
        </form>
    );
};

export default BillForm;