const express = require("express");
const router = express.Router();
const gameRoute = require("./game.route");
const authRoute = require("./auth.route");

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/game",
    route: gameRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
