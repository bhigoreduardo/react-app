import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Compare from "./pages/Compare";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Store />} />
          <Route path="/produto" element={<Product />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/finalizar-compra" element={<Checkout />} />
          <Route path="/comparar" element={<Compare />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
