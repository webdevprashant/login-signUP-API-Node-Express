const express = require("express");
require("dotenv").config();
require("./db/conn")
const app = express();
const path = require("path");
const port = process.env.PORT;
const Register = require("./models/register")
const registerRouter = require("./routers/router")


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(registerRouter);

app.listen(port , () => console.log(`Server started at ${port}`));