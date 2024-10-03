const { CARD_IDS } = require("../assets/cards.data");

/*
    DECKS are an array of IDs 
    IDs are card initials (e.g. "0S" = 10 of Spades)
 */

const createDeck = () => {};

/**
 * Shuffle deck
 * @param {Array} deck
 * @returns {Array}
 */
const shuffleDeck = (deck) => {
  for (let i = deck.length; i >= 0; i--) {
    const newPosition = Math.floor((i + 1) * Math.random());
    const temp = array[newPosition];
    array[newPosition] = array[i];
    array[i] = temp;
  }
  return array;
};

module.exports = { shuffleDeck };
