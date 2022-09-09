require("dotenv/config");

const express = require("express");

const HelloController = require("./src/controllers/HelloController");

const app = express();

app.get("/", HelloController);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`);
}); 