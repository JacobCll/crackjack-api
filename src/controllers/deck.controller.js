const mongoose = require("mongoose");
const httpStatus = require("http-status");

const { CARD_IDS } = require("../assets/cards.data");
const Deck = require("../models/deck");

/*
    DECKS are an array of IDs 
    IDs are card initials (e.g. "0S" = 10 of Spades)
 */
const createDeck = (req, res) => {
  const status = httpStatus.CREATED;
  const newDeck = new Deck({
    _id: new mongoose.Types.ObjectId(),
    cards: CARD_IDS,
  });

  newDeck.save();

  const response = {
    code: status,
    message: "Deck successfully created",
  };

  res.status(status).json(response);
};

const showDeck = async (req, res) => {
  const status = httpStatus.OK;
  const deckID = req.params.deckID;
  const deckResult = await Deck.findOne({ _id: deckID });
  const response = {
    code: status,
    body: deckResult,
  };
  res.status(status).json(response);
};

module.exports = { createDeck, showDeck };
