const mongoose = require("mongoose");
require("dotenv").config();
const { DB } = process.env;

mongoose.connect(DB)
.then(() => {
    console.log("Connection Success");
}).catch((e) => {   console.log("No conn")});