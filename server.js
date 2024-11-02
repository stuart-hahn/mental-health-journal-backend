const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3030;

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Mental Health Journal" });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}, you better go catch it!`);
});
