const express = require("express");
const router = express.Router();
const Journal = require("../models/Journal.js");

// GET all journals
router.get("/", (req, res) => {
  res.json({ journals: "A bunch of journal entries" });
});

// GET single journal
router.get("/:id", (req, res) => {
  res.json({ journal: "A single journal entry" });
});

// POST create new journal
router.post("/", async (req, res) => {
  const { title, content, mood } = req.body;
  try {
    const journal = await Journal.create({ title, content, mood });
    res.status(200).json(journal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
