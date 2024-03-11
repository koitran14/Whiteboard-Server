const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();

const cors = require("cors");
// const boardModel = require("./models/board.model");

const port = process.env.PORT || 4000;

app.use(cors());

mongoose.connect(process.env.DATABASE_URL)
  .then(()=> {
    console.log('Database connected');
  }).catch((error)=> {
    console.log('Error connecting to database: '+ error);
});

app.use(bodyParser.json());
require('./views/board.view')(app);

app.listen(port, () => {
    console.log(`Server is running at site: http://localhost:${port}`);
});

