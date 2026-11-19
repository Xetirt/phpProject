import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contents/user.context";
import { ApiContext } from "../contents/api.context";

export default function HomePage() {
  const { user, login, authError } = useContext(UserContext);
  const { users, loading, error, loadUsers } = useContext(ApiContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // METODOLOGÍA: Carga automática al entrar a la página sin pulsar ningún botón
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, email);
  };

  return (
    <main className="container">
      <h1>ContactImageProf - Portal de Fotografía e Imagen</h1>
      <p>Conecta con los mejores profesionales del sector audiovisual.</p>

      {/* Formulario visible solo en modo invitado */}
      {!user && (
        <section className="card" style={{ marginTop: "1rem" }}>
          <h2>Acceso Profesionales</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              placeholder="Username (ej: Bret)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email (ej: Sincere@april.biz)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>
          </form>
          {authError && <p className="error">{authError}</p>}
        </section>
      )}

      {/* Gestión de los 3 estados: espera, error y presentación */}
      <h2>Directorio Público de Profesionales</h2>
      {loading && <p>Cargando profesionales...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid">
          {users.map((prof) => (
            <div key={prof.id} className="card">
              {/* REQUISITO: Solo datos públicos (username, phone, website y company) */}
              <h3>@{prof.username}</h3>
              <p><strong>Empresa:</strong> {prof.company.name}</p>
              <p><em>"{prof.company.catchPhrase}"</em></p>
              <p><small>Actividad: {prof.company.bs}</small></p>
              <p><strong>Tel:</strong> {prof.phone}</p>
              <p><strong>Web:</strong> {prof.website}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}