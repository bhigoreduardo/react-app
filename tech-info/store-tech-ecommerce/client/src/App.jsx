import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Pages from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages.Public.Home />} />
      </Routes>
    </Router>
  );
}

export default App;
