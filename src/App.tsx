import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MyContext } from "./Components/Context";
import Layout from "./Components/Layout";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Movies from "./Components/Movies";
import TvSeries from "./Components/TvSeries";
import Recomended from "./Components/Recomended";
import SaveMovies from "./Components/SaveMovies";
import MovieData from "../data.json";

function App() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const [movie, setMovie] = useState(
    MovieData.filter((item) => item.category === "Movie")
  );

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
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/series",
      element: <TvSeries />,
    },
    {
      path: "/recomended",
      element: <Recomended />,
    },
    {
      path: "/saved-movies",
      element: <SaveMovies />,
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
          data,
          setData,
          searchInput,
          setSearchInput,
          movie,
          setMovie,
        }}
      >
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
