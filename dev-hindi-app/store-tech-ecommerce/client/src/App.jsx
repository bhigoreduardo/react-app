import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Success from "./pages/Success";

import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
