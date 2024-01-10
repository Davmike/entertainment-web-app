import logo from "../assets/logo.svg";
import home from "../assets/icon-nav-home.svg";
import movies from "../assets/icon-nav-movies.svg";
import tv from "../assets/icon-nav-tv-series.svg";
import save from "../assets/icon-nav-bookmark.svg";
import profile from "../assets/image-avatar.png";

export default function Header() {
  return (
    <header>
      <div className="bg-[#161D2F] flex justify-between items-center px-[16px] h-[56px]">
        <img src={logo} alt="" className="w-[25px] h-[20px]" />
        <div className="flex items-center gap-[25px]">
          <img src={home} alt="" />
          <img src={movies} alt="" />
          <img src={tv} alt="" />
          <img src={save} alt="" />
        </div>
        <img src={profile} alt="" className="w-[24px] h-[24px]" />
      </div>
    </header>
  );
}
