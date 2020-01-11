'user strict'

//configure express and requirements
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {console.log(`Your server is listening on ${PORT}`)});

app.use(express.static('./public'));

app.get('/', (req, res) => {
  console.log('Im alive! Looks like Ive gotten a request.!')
  res.render('index.html');
})


app.get('/mySweetRoute', (req, res) => {
  console.log('How did anyone find this route??');
  res.send('This is the super secret area! You should pat yourself on the back')
})