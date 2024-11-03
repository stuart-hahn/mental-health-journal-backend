const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      enum: ["Happy", "Sad", "Anxious", "Excited", "Calm", "Angry", "Neutral"],
      default: "Neutral",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Journal", journalSchema);
