const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const router = require('./router');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(compression());
app.use(helmet());

app.get('/', (req, res)=>{
  res.send(path(__dirname, '..', 'client', 'index.html'));
});

app.use('/api/v1/', router);

app.use((req, res) => {
  res.status(404).json({message: 'Not Found!!'});
});

app.use((req, res) => {
  res.status(500)
      .json({message: 'Website is under maintenance, please try again later'});
});

module.exports = app;
