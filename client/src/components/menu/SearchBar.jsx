import "../../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="menu-search">
      <div className="search-wrapper">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search your favourite pizza..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;