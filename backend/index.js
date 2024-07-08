const express = require("express");
const router = require("./routes/blogRoute");
const dbConnect = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000; // Use specified port or default to 5000

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/blog", router);

// Connect to MongoDB and start the server
async function startServer() {
  try {
    await dbConnect();
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
}

startServer();
