const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();

const cors = require("cors");

const port = process.env.PORT || 4000;

const allowedOrigins = ['https://white-board-platform.vercel.app'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // specify methods as needed
  allowedHeaders: ['Content-Type', 'Authorization'], // specify headers as needed
}));

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    'https://white-board-platform.vercel.app'
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

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



