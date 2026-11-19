import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import TodoPage from "./pages/TodoPage";
import ErrorPage from "./pages/ErrorPage"; // Reutilizado tal cual de tu proyecto base

export default function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/albums" element={<AlbumPage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}