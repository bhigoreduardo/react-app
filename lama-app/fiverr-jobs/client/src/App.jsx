import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
import Payment from "./pages/Payment";
import Success from "./pages/Success";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <main className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
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
          path: "/payment/:gigId",
          element: <Payment />,
        },
        {
          path: "/success",
          element: <Success />,
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
