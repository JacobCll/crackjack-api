const httpStatus = require("http-status");
const { CARD_IDS } = require("../assets/cards.data");

/*
    DECKS are an array of IDs 
    IDs are card initials (e.g. "0S" = 10 of Spades)
 */
const createDeck = (req, res) => {
  const status = httpStatus.CREATED;
  const response = {
    code: status,
    message: "Deck successfully created",
  };
  res.status(status).json(response);
};

const showDeck = (req, res) => {
  const status = httpStatus.OK;
};

module.exports = { createDeck, showDeck };
