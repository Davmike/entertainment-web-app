import testImage from "../assets/thumbnails/beyond-earth/trending/small.jpg";
import movieImg from "../assets/icon-category-movie.svg";
import save from "../assets/icon-bookmark-empty.svg";

export default function Trending() {
  return (
    <div className="mt-[24px] pl-[16px]">
      <div>
        <h1 className="text-[#FFFFFF] text-[20px] font-light">Trending</h1>
        <div className="w-[240px] h-[140px] relative">
          <img src={testImage} alt="" className="mt-[16px] rounded-[8px]" />
          <div className="w-[32px] h-[32px] bg-[#596276] rounded-full flex justify-center items-center absolute top-[5%] left-[84%]">
            <img src={save} alt="" />
          </div>
          <div className="pl-[16px] absolute top-[60%]">
            <div className="flex items-center gap-[8px]">
              <p className="text-[12px] text-[white] font-light opacity-[0.75]">
                2019
              </p>
              <div className="bg-white rounded-full w-[3px] h-[3px]"></div>
              <div className="flex items-center gap-[6px]">
                <img src={movieImg} alt="" />
                <p className="text-[12px] text-[white] font-light opacity-[0.75]">
                  Movie
                </p>
              </div>
              <div className="bg-white rounded-full w-[3px] h-[3px]"></div>
              <p className="text-[12px] text-[white] font-light opacity-[0.75]">
                PG
              </p>
            </div>
            <h2 className="text-[15px] text-[white] font-medium">
              Beyond Earth
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
