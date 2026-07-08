import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pizzas, setPizzas] = useState([]);

  async function fetchPizzas() {
    try {
      const response = await axios.get("http://localhost:5000/api/pizzas");
      setPizzas(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <div>
      <h1>🍕 PizzaVerse</h1>

      {pizzas.map((pizza) => (
        <div key={pizza._id}>
          <h2>{pizza.name}</h2>
          <img src={pizza.image} alt={pizza.name} width="250" />
          <p>₹ {pizza.price}</p>
          <p>{pizza.category}</p>
          <p>{pizza.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;