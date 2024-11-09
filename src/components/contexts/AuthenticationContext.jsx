import React, { createContext, useState } from "react";

// Crear el contexto de autenticación
export const AuthenticationContext = createContext();

// Recuperar token del localStorage
const getToken = () => {
  try {
    const token = localStorage.getItem("token");
    // Validación básica del token
    if (token && token.split(".").length === 3) {
      return token;
    }
    return null;
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
};

const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(getToken());
  const [isAuthenticated, setIsAuthenticated] = useState(!!user); // Estado para verificar si está autenticado
  const API_URL = import.meta.env.VITE_API_URL || "https://localhost:7175/api/";

  /**
   * Método para registrar un usuario
   * @param {Object} userRequest - Datos del usuario
   * @returns {Object|null} - Respuesta de la API o null si ocurre un error
   */
  const RegisterUser = async (userRequest) => {
    try {
      const response = await fetch(`${API_URL}User`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(userRequest),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al registrar el usuario");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Registration error:", error.message);
      return null;
    }
  };

  /**
   * Método para iniciar sesión
   * @param {Object} userRequest - Datos del usuario
   * @returns {string|null} - Token de la API o null si ocurre un error
   */
  const LoginUser = async (userRequest) => {
    try {
      const response = await fetch(`${API_URL}Auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(userRequest),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al iniciar sesión");
      }

      const token = await response.text();
      localStorage.setItem("token", token);
      setUser(token);
      setIsAuthenticated(true); // Actualiza el estado de autenticación
      return token;
    } catch (error) {
      console.error("Login error:", error.message);
      return null;
    }
  };

  /**
   * Método para cerrar sesión
   */
  const LogoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false); // Actualiza el estado de autenticación
  };

  // Valores proporcionados por el contexto
  const contextValue = {
    user,
    isAuthenticated,
    RegisterUser,
    LoginUser,
    LogoutUser,
  };

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;