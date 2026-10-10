const authRoutes = require("./routes/auth");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use((req, res) => {
  res.status(404).send(`Route not found: ${req.method} ${req.originalUrl}`);
});
console.log("Auth routes loaded:", typeof authRoutes);
console.log("Express version:", require("express/package.json").version);
console.log("Auth router stack:", authRoutes.stack?.map(r => r.route?.path));
app.get("/", (req, res) => {
  res.send("GlowCart backend is running! ✨");
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`GlowCart server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

startServer();
