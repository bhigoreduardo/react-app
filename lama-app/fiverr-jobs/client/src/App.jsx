import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GigsAdd from "./pages/GigsAdd";
import Gigs from "./pages/Gigs";
import GigId from "./pages/GigsId";
import GigsPortfolio from "./pages/GigsPortfolio";
import GigsOrder from "./pages/GigsOrder";
import Messages from "./pages/Messages";
import MessagesId from "./pages/MessagesId";

function App() {
  const Layout = () => {
    return (
      <main className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/create-gig",
          element: <GigsAdd />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gigs/:id",
          element: <GigId />,
        },
        {
          path: "/my-gigs",
          element: <GigsPortfolio />,
        },
        {
          path: "/orders",
          element: <GigsOrder />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/messages/:id",
          element: <MessagesId />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
