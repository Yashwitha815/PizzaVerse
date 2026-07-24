import { useState } from "react";
import { useSelector } from "react-redux";

import MenuHero from "../components/menu/MenuHero";
import SearchBar from "../components/menu/SearchBar";
import CategoryFilter from "../components/menu/CategoryFilter";
import SortDropdown from "../components/menu/SortDropdown";
import MenuGrid from "../components/menu/MenuGrid";
import CustomizePizzaModal from "../components/pizza/CustomizePizzaModal";

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const { selectedPizza } = useSelector((state) => state.pizza);

  return (
    <>
      <MenuHero />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />

      <MenuGrid
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        sortOption={sortOption}
      />

      <CustomizePizzaModal key={selectedPizza?.cartId || selectedPizza?._id} />
    </>
  );
}

export default Menu;
