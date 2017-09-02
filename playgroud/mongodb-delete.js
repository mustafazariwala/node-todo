const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('There is an error')
  };
  console.log('Connected to the server');
  //
  // db.collection('Todos').findOneAndDelete({
  //   Completed:false
  // }).then((result) => {
  //   console.log(result)
  // })
  // db.collection('Users').deleteMany({name: 'Mustafa'}).then((result) => {
  //   console.log(result);
  // })
  db.collection('Users').findOneAndDelete({
    _id : new ObjectID('5990b65b14ce151f5857f005')
  }).then((result) => {
    console.log(result);
  })
  db.close();
})
