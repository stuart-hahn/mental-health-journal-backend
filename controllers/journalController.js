const Journal = require("../models/journal.js");

// GET all journal
const getJournals = async (req, res) => {
  const journals = await Journal.find({}).sort({ createdAt: -1 });

  res.status(200).json(journals);
};
// GET single journal
// POST create a new journal
const createJournal = async (req, res) => {
  const { title, content, mood } = req.body;
  try {
    const journal = await Journal.create({ title, content, mood });
    res.status(200).json(journal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH update a single journal
// DELETE delete a single journal
module.exports = { getJournals, createJournal };
