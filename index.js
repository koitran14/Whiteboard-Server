const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();

const cors = require("cors");

const port = process.env.PORT || 4000;

app.use(cors({
  origin: "*", // allows all origins
  methods: ["GET", "POST", "PUT", "DELETE"], // specify allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // specify allowed headers
}));

mongoose.connect(process.env.DATABASE_URL)
  .then(()=> {
    console.log('Database connected');
  }).catch((error)=> {
    console.log('Error connecting to database: '+ error);
});
app.use(bodyParser.json());

require('./views/board.view')(app);
require('./views/favorite.view')(app);

app.listen(port, () => {
    console.log(`Server is running at site: http://localhost:${port}`);
});



