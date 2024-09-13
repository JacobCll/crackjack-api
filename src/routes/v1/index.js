const express = require("express");
const router = express.Router();
const cardsRoute = require("./cards.router");
const deckRoute = require("./deck.router");

const defaultRoutes = [
  {
    path: "/cards",
    route: cardsRoute,
  },
  {
    path: "/deck",
    route: deckRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
