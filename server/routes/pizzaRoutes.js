const express = require("express");

const router = express.Router();

const {
  getPizzas,
  createPizza,
} = require("../controllers/pizzaController");

router.get("/", getPizzas);

router.post("/", createPizza);

module.exports = router;