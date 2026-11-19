import { useContext, useEffect } from "react";
import { ApiContext } from "../contents/api.context";
import { UserContext } from "../contents/user.context";
import PostCard from "../components/PostCard";

export default function PostPage() {
  const { posts, loading, error, loadPosts } = useContext(ApiContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <main className="container">
      <h1>Publicaciones de la Comunidad</h1>
      {loading && <p>Cargando publicaciones...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading &&
        !error &&
        posts.map((post) => (
          <PostCard key={post.id} post={post} canViewComments={Boolean(user)} />
        ))}
    </main>
  );
}