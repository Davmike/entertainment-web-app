import { Outlet } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
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
      <Outlet />
    </>
  );
}
