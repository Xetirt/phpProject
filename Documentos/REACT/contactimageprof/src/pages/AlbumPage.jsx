import { useContext, useEffect } from "react";
import { ApiContext } from "../contents/api.context";
import AlbumCard from "../components/AlbumCard";

export default function AlbumPage() {
  const { albums, loading, error, loadAlbums } = useContext(ApiContext);

  useEffect(() => {
    loadAlbums();
  }, [loadAlbums]);

  return (
    <main className="container">
      <h1>Galería de Álbumes</h1>
      {loading && <p>Cargando álbumes...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && albums.map((album) => <AlbumCard key={album.id} album={album} />)}
    </main>
  );
}