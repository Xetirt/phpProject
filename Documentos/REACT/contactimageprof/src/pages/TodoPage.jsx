import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contents/user.context";
import { ApiContext } from "../contents/api.context";

export default function TodoPage() {
  const { user } = useContext(UserContext);
  const { todos, loading, error, loadUserTodos } = useContext(ApiContext);

  useEffect(() => {
    if (user) {
      loadUserTodos(user.id);
    }
  }, [user, loadUserTodos]);

  if (!user) return <Navigate to="/" replace />;

  return (
    <main className="container">
      <h1>Lista de Tareas de {user.name}</h1>
      {loading && <p>Cargando tareas...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <ul className="card" style={{ listStyle: "none" }}>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              {todo.completed ? "✅" : "⏳"} {todo.title}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}