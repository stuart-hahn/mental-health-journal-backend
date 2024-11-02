const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.json({ message: "Mental Health Journal" });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}, you better go catch it!`);
});
