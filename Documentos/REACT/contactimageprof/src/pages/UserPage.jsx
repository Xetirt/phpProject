import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contents/user.context";
import { ApiContext } from "../contents/api.context";
import AlbumCard from "../components/AlbumCard";
import PostCard from "../components/PostCard";

export default function UserPage() {
  const { user } = useContext(UserContext);
  const { albums, posts, loading, error, loadAlbums, loadPosts } = useContext(ApiContext);

  useEffect(() => {
    if (user) {
      loadAlbums();
      loadPosts();
    }
  }, [user, loadAlbums, loadPosts]);

  // Si es invitado, protegemos la ruta redirigiendo a Home
  if (!user) return <Navigate to="/" replace />;

  // Filtramos los álbumes y posts que pertenecen exclusivamente al usuario autenticado
  const myAlbums = albums.filter((a) => a.userId === user.id);
  const myPosts = posts.filter((p) => p.userId === user.id);

  return (
    <main className="container">
      <h1>Perfil Privado de {user.name}</h1>

      <section className="card">
        <h2>Datos Personales Completos</h2>
        <p><strong>Nombre completo:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Teléfono:</strong> {user.phone}</p>
        <p><strong>Web:</strong> {user.website}</p>
        <p>
          <strong>Dirección:</strong> {user.address.street}, {user.address.suite}, {user.address.city} ({user.address.zipcode})
        </p>
        <p><strong>Empresa:</strong> {user.company.name} — {user.company.catchPhrase}</p>
      </section>

      {loading && <p>Cargando tu contenido...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <>
          <section>
            <h2>Mis Álbumes ({myAlbums.length})</h2>
            {myAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </section>

          <section>
            <h2>Mis Posts y Comentarios Recibidos ({myPosts.length})</h2>
            {myPosts.map((post) => (
              <PostCard key={post.id} post={post} canViewComments={true} />
            ))}
          </section>
        </>
      )}
    </main>
  );
}