const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/db");
const path = require('path')


const todoRoute = require("./routes/todo");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ extended: false }));
dotenv.config({ path: "./config/config.env" });

connectDb();

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}

app.use("/api/v1/todo", todoRoute);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is runing in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);
