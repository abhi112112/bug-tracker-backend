const authMiddleware = require("./middleware/authMiddleware");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes"); // ✅ ADD THIS

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API Running");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ msg: "Protected route accessed", user: req.user });
});
const bugRoutes = require("./routes/bugRoutes");

app.use("/api/bugs", bugRoutes);