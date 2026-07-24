import "../../styles/PizzaImage.css";

function PizzaImage({ pizza }) {
  return (
    <div className="pizza-image-panel">
      <img src={pizza.image} alt={pizza.name} className="pizza-image" />
    </div>
  );
}

export default PizzaImage;
