// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use(cors({ origin: "http://localhost:3000" }));

// Routes
app.use("/api/products", require("./routes/products"));
app.use("/api/reviews", require("./routes/reviews"));

// Create sample data for testing
const seedData = require("./seeder");
seedData();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
