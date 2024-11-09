import React, { useContext, useState } from "react";
import { AuthenticationContext } from "./contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const { LoginUser } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (email.trim() === "" || password.trim() === "") {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, introduce un email válido.");
      return;
    }

    // Preparar la solicitud
    const userRequest = {
      email,
      password,
    };

    try {
      const response = await LoginUser(userRequest);
      if (response !== null) {
        navigate("/", { replace: true }); // Redirige al inicio tras iniciar sesión
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>Sign in to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;