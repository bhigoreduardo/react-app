import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useStateValue } from "./context/initialState";
import { actionType } from "./context/reducer";
import { getAllFoodItems } from "./utils/firebaseFunctions";

import { Header, MainContainer, CreateContainer } from "./components";

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      <Router>
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Header />

          <main className="w-screen mt-24 p-8">
            <Routes>
              <Route path="/*" element={<MainContainer />} />
              <Route path="/create" element={<CreateContainer />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AnimatePresence>
  );
}
export default App;
