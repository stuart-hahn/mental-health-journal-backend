const express = require("express");
const router = express.Router();

// GET all journals
router.get("/", (req, res) => {
  res.json({ journals: "A bunch of journal entries" });
});

// GET single journal
router.get("/:id", (req, res) => {
  res.json({ journal: "A single journal entry" });
});

// POST create new journal
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ journal: "A new journal" });
});

// DELETE journal
router.delete("/:id", (req, res) => {
  res.json({ journal: "Delete a journal" });
});

// UPDATE a journal
router.patch("/:id", (req, res) => {
  res.json({ journal: "Update a journal" });
});

module.exports = router;
