import movieImg from "../../public/assets/icon-category-movie.svg";
import save from "../../public/assets/icon-bookmark-empty.svg";
import MovieData from "../../data.json";

export default function Trending() {
  return (
    <div className="mt-[24px] pl-[16px]">
      <div>
        <h1 className="text-[#FFFFFF] text-[20px] font-light">Trending</h1>
        {MovieData.map((movie, index) => {
          console.log(movie.thumbnail); // Moved the console.log here
          return movie.isTrending ? (
            <div className="w-[240px] h-[140px] relative" key={index}>
              <img
                src={movie.thumbnail.trending?.small}
                alt=""
                className="mt-[16px] rounded-[8px]"
              />
              <div className="w-[32px] h-[32px] bg-[#596276] rounded-full flex justify-center items-center absolute top-[5%] left-[84%]">
                <img src={save} alt="" />
              </div>
              <div className="pl-[16px] absolute top-[60%]">
                <div className="flex items-center gap-[8px]">
                  <p className="text-[12px] text-[white] font-light opacity-[0.75]">
                    {movie.year}
                  </p>
                  <div className="bg-white rounded-full w-[3px] h-[3px] opacity-[0.5]"></div>
                  <div className="flex items-center gap-[6px]">
                    <img src={movieImg} alt="" />
                    <p className="text-[12px] text-[white] font-light opacity-[0.75]">
                      {movie.category}
                    </p>
                  </div>
                  <div className="bg-white rounded-full w-[3px] h-[3px] opacity-[0.5]"></div>
                  <p className="text-[12px] text-[white] font-light opacity-[0.75]">
                    {movie.rating}
                  </p>
                </div>
                <h2 className="text-[15px] text-[white] font-medium">
                  Beyond Earth
                </h2>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
