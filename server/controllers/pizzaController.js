const Pizza = require("../models/Pizza");

// GET all pizzas
async function getPizzas(req, res) {
    try {
        const pizzas = await Pizza.find();
        res.status(200).json(pizzas);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

// POST a new pizza
const createPizza = async (req, res) => {
  try {
    const pizza = await Pizza.create(req.body);

    res.status(201).json(pizza);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getPizzas,
  createPizza,
};