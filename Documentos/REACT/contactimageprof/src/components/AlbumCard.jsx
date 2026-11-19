import { useState } from "react";

export default function AlbumCard({ album }) {
  // METODOLOGÍA: Estado local independiente por cada tarjeta para poder comparar álbumes
  const [isOpen, setIsOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);

  const handleToggle = async () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    // Optimización: solo pedimos las fotos a la API la primera vez que se despliega
    if (nextState && photos.length === 0) {
      setLoadingPhotos(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
        const data = await res.json();
        setPhotos(data.slice(0, 6)); // Mostramos 6 fotos de muestra por álbum
      } finally {
        setLoadingPhotos(false);
      }
    }
  };

  return (
    <article className="card">
      <div className="card-header">
        <h3>{album.title}</h3>
        <button onClick={handleToggle}>
          {isOpen ? "Ocultar fotos" : "Ver fotos"}
        </button>
      </div>

      {isOpen && (
        <div>
          {loadingPhotos ? (
            <p>Cargando fotos...</p>
          ) : (
            <div className="photo-grid">
              {photos.map((photo) => (
                <div key={photo.id} className="photo-item">
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                  <p>{photo.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}