import { createContext, useState, useCallback } from "react";

export const ApiContext = createContext();

const BASE_URL = "https://jsonplaceholder.typicode.com";

export function ApiProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  // METODOLOGÍA: Estados estándar del ciclo de carga (espera y error)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función genérica reutilizable para cualquier endpoint GET
  const fetchResource = useCallback(async (endpoint, setter) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_URL}${endpoint}`);
      if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
      const data = await res.json();
      setter(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Métodos específicos que llamarán las páginas automáticamente en su useEffect
  const loadUsers = useCallback(() => fetchResource("/users", setUsers), [fetchResource]);
  const loadAlbums = useCallback(() => fetchResource("/albums", setAlbums), [fetchResource]);
  const loadPosts = useCallback(() => fetchResource("/posts", setPosts), [fetchResource]);
  const loadUserTodos = useCallback(
    (userId) => fetchResource(`/todos?userId=${userId}`, setTodos),
    [fetchResource]
  );

  return (
    <ApiContext.Provider
      value={{
        users,
        albums,
        posts,
        todos,
        loading,
        error,
        loadUsers,
        loadAlbums,
        loadPosts,
        loadUserTodos,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}