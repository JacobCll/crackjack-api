const express = require("express");
const router = express.Router();
const cardsController = require("../../controllers/cards.controller");

router.get("/", cardsController.getCards);
router.get("/:cardID", cardsController.getCard);

module.exports = router;
