import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="container" style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  );
}