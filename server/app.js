const express = require('express');
const {join} = require('path');
const router = require('./router');
const helmet = require('helmet');
const compression = require('compression');
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(compression());
app.use(helmet());
app.use(express.static(join(__dirname, '..', 'client')));
app.set('port', process.env.PORT || 4000);
app.use(router);
app.use((req, res) => {
  res.status(404).json({message: 'Not Found!!'});
});

app.use((req, res) => {
  res.status(500)
      .json({message: 'Website is under maintenance, please try again later'});
});

module.exports = app;
