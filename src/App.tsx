import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-slate-100 text-slate-900">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
