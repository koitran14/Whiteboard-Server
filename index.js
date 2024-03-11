const mongoose = require("mongoose");
const express = require("express");
require('dotenv').config()
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL)
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
});

app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Project with Nodejs Express and MongoDB',
    });
});

app.listen(port, () => {
    console.log(`Our server is running on port ${port}`);
});

