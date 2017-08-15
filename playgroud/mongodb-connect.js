const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("there is an error");
  }
  console.log('Connected');
  //
  // db.collection('Todos').insertOne({
  //   text: 'What is wrong with you',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //
  //   return console.log('unable to insert', err)
  // }
  //     console.log(JSON.stringify(result.ops, undefined, 2))
  //
  // });

  db.collection('Todos').insertOne({
    text: 'what is new here',
    completed: true
  },(err, result) => {
    if (err) {

    return console.log('unable to insert', err)
  }
      console.log(result.ops[0]._id.getTimestamp())

  });

  db.close( );

})
