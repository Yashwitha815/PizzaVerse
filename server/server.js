const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const pizzaRoutes = require("./routes/pizzaRoutes");

app.get("/", (req, res) => {
  res.send("🍕 PizzaVerse Backend Running...");
});

app.use("/api/pizzas", pizzaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});