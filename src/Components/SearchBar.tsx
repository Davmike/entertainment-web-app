import search from "../../public/assets/icon-search.svg";

export default function SearchBar() {
  return (
    <div>
      <div className="flex justify-start gap-[16px] pl-[16px] pt-[24px]">
        <img src={search} alt="" className="w-[24px] h-[24px]" />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="searchInput"
        />
      </div>
    </div>
  );
}
