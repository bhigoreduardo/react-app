import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as RouteWrapper from "./routes";
import * as Pages from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages.Public.Home />} />
        <Route path="/login" element={<Pages.Public.Login />} />

        <Route path="/dashboard" element={<RouteWrapper.Admin />}>
          <Route path="admin" element={<Pages.Admin.Dashboard />} />
          <Route path="admin/categories" element={<Pages.Admin.Categories />} />
          <Route path="admin/products" element={<Pages.Admin.Products />} />
          <Route path="admin/orders" element={<Pages.Admin.Orders />} />
          <Route path="admin/users" element={<Pages.Admin.Users />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
