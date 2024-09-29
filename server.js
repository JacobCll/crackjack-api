const mongoose = require("mongoose");
const app = require("./src/app");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.BASE_URL}`);
  });
});
