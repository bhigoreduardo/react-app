import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customer";
import CatalogProducts from "./pages/Catalog/Products";
import CatalogBrands from "./pages/Catalog/Brands";
import CatalogCategories from "./pages/Catalog/Categories";
import CatalogColors from "./pages/Catalog/Colors";
import Orders from "./pages/Orders";
import Coupons from "./pages/Coupons";
import Blogs from "./pages/Blog/Blogs";
import BlogCategories from "./pages/Blog/Categories";
import Shipping from "./pages/Shipping";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/recuperar-senha" element={<ForgotPassword />} />
        <Route path="/redefinir-senha" element={<ResetPassword />} />

        <Route path="/admin" element={<Layout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="clientes" element={<Customers />} />
          <Route path="produtos" element={<CatalogProducts />} />
          <Route path="marcas" element={<CatalogBrands />} />
          <Route path="categorias" element={<CatalogCategories />} />
          <Route path="cores" element={<CatalogColors />} />
          <Route path="pedidos" element={<Orders />} />
          <Route path="cupons" element={<Coupons />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs-categorias" element={<BlogCategories />} />
          <Route path="entregas" element={<Shipping />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
