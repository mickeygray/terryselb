const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

connectDB();
app.use(express.json({ extended: true }));
app.use("/api/news", require("./routes/news"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
