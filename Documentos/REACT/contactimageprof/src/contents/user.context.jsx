import { createContext, useState } from "react";

// METODOLOGÍA: Creamos el contexto para compartir el usuario autenticado en toda la app
export const UserContext = createContext();

export function UserProvider({ children }) {
  // null = usuario invitado | objeto usuario = usuario autenticado
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  // Función de login: valida username y email contra JSONPlaceholder
  const login = async (username, email) => {
    setAuthError(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Error conectando con el servidor");
      const users = await res.json();

      // Buscamos coincidencia exacta (ignorando mayúsculas/espacios extra)
      const foundUser = users.find(
        (u) =>
          u.username.toLowerCase() === username.trim().toLowerCase() &&
          u.email.toLowerCase() === email.trim().toLowerCase()
      );

      if (foundUser) {
        setUser(foundUser); // Reactividad: al cambiar este estado, el Header y páginas se actualizan solos
        return true;
      } else {
        setAuthError("Credenciales incorrectas (revisa username y email)");
        return false;
      }
    } catch (err) {
      setAuthError(err.message);
      return false;
    }
  };

  // Cierra sesión volviendo al estado invitado
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout, authError }}>
      {children}
    </UserContext.Provider>
  );
}