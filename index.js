const express = require("express");
require("./db");
const userRouter = require("./routes/user.routes");
const bookRouter = require("./routes/book.routes");
const { userModel, bookModel } = require("./models");

const app = express();
app.use(express.json());
app.use("/", userRouter);
app.use("/", bookRouter);

userModel.sync();
bookModel.sync();

app.listen(8080, () => {
  console.log(`server is running`);
});
