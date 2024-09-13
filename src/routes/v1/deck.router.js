const express = require("express");
const router = express.Router();
const deckController = require("../../controllers/deck.controller");

router.get("/", deckController.showDeck);

module.exports = router;
