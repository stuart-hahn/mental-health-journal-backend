const express = require("express");
const router = express.Router();
const {
  getJournals,
  createJournal,
} = require("../controllers/journalController.js");

// GET all journals
router.get("/", getJournals);

// GET single journal
router.get("/:id", (req, res) => {
  res.json({ journal: "A single journal entry" });
});

// POST create new journal
router.post("/", createJournal);

// DELETE journal
router.delete("/:id", (req, res) => {
  res.json({ journal: "Delete a journal" });
});

// UPDATE a journal
router.patch("/:id", (req, res) => {
  res.json({ journal: "Update a journal" });
});

module.exports = router;
