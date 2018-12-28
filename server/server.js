var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');

var app = express();
const port  = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/',(req, res) =>{
  res.send('<h1>Welcome to rest Api of Universal Talk.</h1>')
});

app.listen(port, ()=>{
  console.log(`Server is listening to port ${port}`);
})
