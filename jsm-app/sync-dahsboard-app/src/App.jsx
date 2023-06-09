import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useStateContext } from "./contexts/Context";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";
import { ConfigButton } from "./components";
import { Sidebar, Navbar, ThemeSettings, Footer } from "./widgets";

function App() {
  const { isSidebar, isSettings, theme } = useStateContext();

  return (
    <main className={`${theme === "light" ? "light" : "dark"}`}>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg bg-gray-200">
          {/* CONFIG BUTTON */}
          <div className="fixed right-10 bottom-10 z-50">
            <ConfigButton />
          </div>

          {/* SIDEBAR */}
          <div
            className={`md:static fixed w-72 z-20 transition-all ${
              isSidebar ? "left-0" : "-left-72"
            }`}
          >
            <Sidebar />
          </div>

          <div className={`w-screen min-h-screen`}>
            {/* NAVBAR */}
            <div className="w-full">
              <Navbar />
            </div>

            {/* SETTINGS */}
            {isSettings && <ThemeSettings />}

            <Routes>
              <Route path="/" element={<Ecommerce />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>

            {/* FOOTER */}
            <Footer />
          </div>
        </div>
      </Router>
    </main>
  );
}

export default App;
