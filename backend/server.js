const express = require("express");
const dbConn = require("./Conn/dbConn");
require("dotenv").config();

const app = express();
app.use(express.json());

dbConn();

app.listen(process.env.PORT, () => {
    console.log("Server is runnung on port" + process.env.PORT);
})