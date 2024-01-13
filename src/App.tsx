import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MyContext } from "./Components/Context";
import Layout from "./Components/Layout";
import Trending from "./Components/Trending";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showMovie, setShowMovie] = useState(true);
  const [showSeries, setShowSeries] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/layout",
      element: <Layout />,
    },
  ]);

  return (
    <>
      <MyContext.Provider
        value={{
          showLogin,
          setShowLogin,
          showMovie,
          setShowMovie,
          showSeries,
          setShowSeries,
        }}
      >
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
