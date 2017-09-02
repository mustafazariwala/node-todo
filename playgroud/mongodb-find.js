const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('There is an error')
  };
  console.log('Connected to the server');

  db.collection('Todos').find().count().then((docs) => {
    console.log('TODOS');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log('Error Finding Data')

  })

  db.close();
})
