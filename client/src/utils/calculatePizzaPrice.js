const toppingPrices = {
  cheese: 40,
  olive: 30,
  mushroom: 35,
  jalapeno: 25,
  corn: 20,
  paneer: 50,
};

export const calculatePizzaPrice = ({
  basePrice,
  selectedSize,
  selectedCrust,
  selectedToppings,
  quantity = 1,
}) => {
  const sizePrice =
    selectedSize === "Small"
      ? -80
      : selectedSize === "Large"
      ? 80
      : 0;

  const crustPrice =
    selectedCrust === "thin"
      ? 40
      : selectedCrust === "cheese"
      ? 80
      : 0;

  const toppingsPrice = selectedToppings.reduce(
    (total, topping) => total + (toppingPrices[topping] || 0),
    0
  );

  const singlePizzaPrice =
    basePrice +
    sizePrice +
    crustPrice +
    toppingsPrice;

  const totalPrice = singlePizzaPrice * quantity;

  return {
    sizePrice,
    crustPrice,
    toppingsPrice,
    singlePizzaPrice,
    totalPrice,
  };
};