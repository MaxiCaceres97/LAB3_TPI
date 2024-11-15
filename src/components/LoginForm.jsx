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

    if (email.trim() === "" || password.trim() === "") {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, introduce un email válido.");
      return;
    }

    const userRequest = {
      email,
      password,
    };

    try {
      const response = await LoginUser(userRequest);
      if (response !== null) {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-primary">
          <div className="card-header text-center">
            <h3 className="card-title">Iniciar Sesión</h3>
          </div>
          <div className="card-body login-card-body">
            <p className="login-box-msg">Ingresa tus datos para continuar</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Iniciar Sesión
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
