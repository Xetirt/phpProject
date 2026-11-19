import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contents/user.context";
import "./HeaderComponent.css"; // Importamos los estilos propios del menú

export default function HeaderComponent() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Al cerrar sesión redirigimos a la página principal
  };

  return (
    <header className="header">
      <nav className="nav-links">
        {/* Enlaces públicos siempre visibles */}
        <Link to="/">Inicio</Link>
        <Link to="/albums">Álbumes</Link>
        <Link to="/posts">Posts</Link>

        {/* METODOLOGÍA: Renderizado condicional reactivo según si hay usuario autenticado */}
        {user && (
          <>
            <Link to="/profile">Mi Perfil</Link>
            <Link to="/todos">Mis Tareas</Link>
          </>
        )}
      </nav>

      <div className="user-info">
        {user ? (
          <>
            {/* Saludamos con el atributo 'name' del usuario autenticado */}
            <span>Hola, <strong>{user.name}</strong></span>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <span>Modo Invitado</span>
        )}
      </div>
    </header>
  );
}