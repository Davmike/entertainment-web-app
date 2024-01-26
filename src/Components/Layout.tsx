import { Outlet } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Trending from "./Trending";

export default function Layout() {
  return (
    <>
      <Header />
      <SearchBar />
      <Trending />
      <Outlet />
    </>
  );
}
