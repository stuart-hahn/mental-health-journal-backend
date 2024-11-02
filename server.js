const express = require("express");
const app = express();
require("dotenv").config();

const journalRoutes = require("./routes/journals.js");

const PORT = process.env.PORT || 3030;

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/journals", journalRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}, you better go catch it!`);
});
