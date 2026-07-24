import { useEffect, useState } from "react";
import axios from "axios";

import PizzaCard from "../home/PizzaCard";

import "../../styles/MenuGrid.css";

function MenuGrid({
  searchTerm,
  selectedCategory,
  sortOption,
}) {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/pizzas"
        );

        setPizzas(response.data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  let filteredPizzas = pizzas.filter((pizza) => {
    const matchesSearch = pizza.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      pizza.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  switch (sortOption) {
    case "priceLow":
      filteredPizzas.sort((a, b) => a.price - b.price);
      break;

    case "priceHigh":
      filteredPizzas.sort((a, b) => b.price - a.price);
      break;

    case "nameAZ":
      filteredPizzas.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    default:
      break;
  }

  return (
    <section className="menu-grid-section">

      <div className="pizza-grid">

        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => (
            <PizzaCard
              key={pizza._id}
              pizza={pizza}
            />
          ))
        ) : (
          <h2 className="no-pizza">
            🍕 No pizzas found.
          </h2>
        )}

      </div>

    </section>
  );
}

export default MenuGrid;