const express = require("express");
const path=require("path")
require("dotenv").config();
require("./db/mongoose");

const userRouter = require("./routers/user");

const app = express();
const port = process.env.PORT;

// static file setup
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"../public")));

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log("Server is up on port " + port);
});