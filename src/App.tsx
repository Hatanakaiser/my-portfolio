import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import AllNews from "./pages/AllNews";
import GalleryPage from "./pages/GalleryPage";
import BooksPage from "./pages/BooksPage";
import BookDetail from "./pages/BookDetail";

const SITE = "Nova Hatanakaiser";
const ORIGIN = import.meta.env.VITE_SITE_URL ?? window.location.origin;
const DEFAULT_DESC = "同人誌・イラスト・VR試作を中心に活動するサークルです。";

export default function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-slate-100 text-slate-900">
      <>
        <title>{SITE}</title>
        <meta name="description" content={DEFAULT_DESC} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE} />
        <meta property="og:title" content={SITE} />
        <meta property="og:description" content={DEFAULT_DESC} />
        <meta property="og:url" content={ORIGIN} />
        <meta property="og:image" content={`${ORIGIN}/ogp/default.jpg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE} />
        <meta name="twitter:description" content={DEFAULT_DESC} />
        <meta name="twitter:image" content={`${ORIGIN}/ogp/default.jpg`} />
      </>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-news" element={<AllNews />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:slug" element={<BookDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
