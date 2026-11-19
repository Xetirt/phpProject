import { useState } from "react";

export default function PostCard({ post, canViewComments }) {
  // METODOLOGÍA: Estado local para gestionar el toggle individual de comentarios
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);

  const handleToggleComments = async () => {
    const nextState = !showComments;
    setShowComments(nextState);

    if (nextState && comments.length === 0) {
      setLoadingComments(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        const data = await res.json();
        setComments(data);
      } finally {
        setLoadingComments(false);
      }
    }
  };

  return (
    <article className="card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      {/* REQUISITO: Solo usuarios autenticados pueden desplegar los comentarios */}
      {canViewComments ? (
        <div style={{ marginTop: "0.8rem" }}>
          <button onClick={handleToggleComments}>
            {showComments ? "Ocultar comentarios" : "Ver comentarios"}
          </button>

          {showComments && (
            <div className="comments-box">
              {loadingComments ? (
                <p>Cargando comentarios...</p>
              ) : (
                comments.map((c) => (
                  <div key={c.id} className="comment-item">
                    <strong>{c.email}:</strong> <span>{c.body}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      ) : (
        <small>Inicia sesión para ver los comentarios.</small>
      )}
    </article>
  );
}