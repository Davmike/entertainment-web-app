import logo from "../../public/assets/logo.svg";
import home from "../../public/assets/icon-nav-home.svg";
import movies from "../../public/assets/icon-nav-movies.svg";
import tv from "../../public/assets/icon-nav-tv-series.svg";
import save from "../../public/assets/icon-nav-bookmark.svg";
import profile from "../../public/assets/image-avatar.png";
import { useContext } from "react";
import { MyContext } from "./Context";

export default function Header() {
  const context = useContext(MyContext);
  return (
    <header>
      <div className="bg-[#161D2F] flex justify-between items-center px-[16px] h-[56px]">
        <img src={logo} alt="" className="w-[25px] h-[20px]" />
        <div className="flex items-center gap-[25px]">
          <img
            src={home}
            className="hover:opacity-50 transition-opacity duration-300 hover:filter hover:invert-[0%] cursor-pointer"
            alt=""
          />
          <img
            className="hover:opacity-50 transition-opacity duration-300 hover:filter hover:invert-[0%] cursor-pointer"
            src={movies}
            alt=""
            onClick={() => context?.setShowMovie(false)}
          />
          <img
            className="hover:opacity-50 transition-opacity duration-300 hover:filter hover:invert-[0%] cursor-pointer"
            src={tv}
            alt=""
            onClick={() => context?.setShowSeries(false)}
          />
          <img
            className="hover:opacity-50 transition-opacity duration-300 hover:filter hover:invert-[0%] cursor-pointer"
            src={save}
            alt=""
          />
        </div>
        <img src={profile} alt="" className="w-[24px] h-[24px]" />
      </div>
    </header>
  );
}
