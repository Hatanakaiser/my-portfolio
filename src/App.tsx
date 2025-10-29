import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import AllNews from "./pages/AllNews";
import GalleryPage from "./pages/GalleryPage";
import BooksPage from "./pages/BooksPage";

export default function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-slate-100 text-slate-900">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-news" element={<AllNews />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
