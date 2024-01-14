import { Outlet } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Trending from "./Trending";
// import { useEffect } from "react";

export default function Layout() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("");
  // }, []);

  return (
    <>
      <Header />
      <SearchBar />
      <Trending />
      <Outlet />
    </>
  );
}
