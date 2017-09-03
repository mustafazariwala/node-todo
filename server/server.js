const express = require('express');
const {mongoose} = require('./db/mongoose.js');
const bodyparser = require('body-parser');
const {todo} = require('./models/todo.js');
const {User} = require('./models/users.js')

var app = express();

app.use(bodyparser.json());

app.post('/todos', (req, res) => {
  var Todo1 = todo({
    text: req.body.text
  });

  Todo1.save().then((docs) => {
    res.send(docs)
  },(e) => {
    res.send(e);

  })

})

app.listen(3000 , () => {
  console.log('Started on port 3000');
})
