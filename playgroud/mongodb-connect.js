const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('There is an error')
  }
  console.log('Connection Succesfull')

  db.collection('Todos').insertOne({
    text: 'Mustafa',
    Completed: false
  }, (err , result) => {
    if (err) {
      return console.log('Unable to insert TODO', err)

    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
  })
  db.close();
})
