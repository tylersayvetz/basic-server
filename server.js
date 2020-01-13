'use strict'

//configure express and requirements
const express = require('express');
const app = express();
const http = require('http');
require('dotenv').config();
const PORT = process.env.PORT || 3001;



//port
app.listen(PORT, () => {console.log(`Your server is listening on ${PORT}`)});

//configure express
app.use(express.static('./public'));

//globals area
const data = {
  name: 'tyler',
  dataType: 'hecksa data',
  data: {
    age: 55,
    weight: 55,
    color: 'red',
  }
}

//routes
app.get('/', (req, res) => {
  console.log('Im alive!');
  app.static('public/index.html');
})

app.get('/data', (req, res) => {
  console.log('How did anyone find this route??');
  res.send(JSON.stringify(data));
})