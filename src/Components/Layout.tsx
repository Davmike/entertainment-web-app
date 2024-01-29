import { Outlet } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Trending from "./Trending";
import DesktopHeader from "./DesktopHeader";

export default function Layout() {
  return (
    <>
      <div className="xl:flex xl:flex-row">
        <Header />
        <DesktopHeader />
        <SearchBar />
        <Trending />
        <Outlet />
      </div>
    </>
  );
}
