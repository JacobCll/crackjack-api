const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String, required: true },
  balance: { type: Number, required: true, default: 1000 },
  games: [{ type: mongoose.Schema.Types.ObjectId }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
