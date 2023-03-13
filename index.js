const express = require("express");
require("./db");
const { userModel, bookModel } = require("./models");
// const User = require("./models");
console.log(userModel, bookModel);

const app = express();

userModel.sync();
// bookModel.sync();

app.listen(8080, () => {
  console.log(`server is running`);
});
