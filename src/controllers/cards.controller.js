const httpStatus = require("http-status");
const { CARDS } = require("../assets/cards.data.js");

const getCards = (req, res) => {
  const status = httpStatus.OK;
  const response = {
    code: status,
    message: "All cards fetched",
    body: CARDS,
  };
  res.status(status).json(response);
};

const getCard = (req, res) => {
  const status = httpStatus.OK;
  const cardID = req.params.cardID;
  const response = {
    code: status,
    message: `Card ${cardID} fetched`,
    body: CARDS[cardID],
  };
  res.status(status).json(response);
};

module.exports = { getCards, getCard };
