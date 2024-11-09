import { jwtDecode } from "jwt-decode";
// Función para decodificar el token y obtener las claims
export const getClaimsFromToken = (token) => {
  try {
    const claims = jwtDecode(token);
    return claims;
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return null;
  }
};
