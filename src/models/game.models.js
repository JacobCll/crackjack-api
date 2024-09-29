const mongoose = require("mongoose");

const gameSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    players: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        hand: { type: Array, default: [] },
        bet: { type: Number, required: true },
        status: {
          type: String,
          enum: ["active", "busted", "stood", "won", "lost"],
          default: "active",
        },
      },
    ],

    dealerHand: { type: Array, default: [] },
    deck: { type: Array, required: true },
    status: {
      type: String,
      enum: ["in-progress", "finished"],
      default: "in-progress",
    },
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
