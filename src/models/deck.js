const mongoose = require("mongoose");

const deckSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  cards: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Deck", deckSchema);
