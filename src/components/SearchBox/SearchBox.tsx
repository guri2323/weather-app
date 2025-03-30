import "./SearchBox.css";

interface SearchBoxProps {
  search: string;
  setSearch: (search: string) => void;
  handleSearch: () => void;
}
const SearchBox = ({ search, setSearch, handleSearch }: SearchBoxProps) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
