import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Contact";
import Success from "./pages/Success";
import Failed from "./pages/Failed";
import Footer from "./components/Footer";

// import Ulasan from "./pages/Ulasan";
// import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Product />} />
          <Route path="/success" element={<Success />} /> {/* ✅ add this */}
          <Route path="/failed" element={<Failed />} />
          {/* <Route path="/ulasan" element={<Ulasan />} />
          <Route path="/footer" element={<Footer />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
