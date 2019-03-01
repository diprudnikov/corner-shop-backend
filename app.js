const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/apiRouter');

const app = express();

app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong!!');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(apiRouter);


module.exports = app;
