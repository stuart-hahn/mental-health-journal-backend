const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const journalRoutes = require("./routes/journals.js");

const PORT = process.env.PORT || 3030;

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/journals", journalRoutes);

// connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}, you better go catch it!`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error!", error);
  });
