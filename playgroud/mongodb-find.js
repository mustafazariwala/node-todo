const {MongoClient, ObjectID} = require('mongodb');

//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//   if (err) {
//     return console.log("there is an error");
//   }
//   console.log('Connected');
//
//   db.collection('Todos').find({
//     _id:  new ObjectID('5991f8af773ebf45f4603837')
//   }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined , 2))
//   }, (err) => {
//     console.log('unable to fetch data', err )
//
//   });
//
// })

  MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if (err) {
      return console.log('There is an error Connecting')
    }
    console.log('Connected Succesfully')

    db.collection('Users').find({name: 'Mustafa'}).toArray().then((docs) => {
      console.log('todos')
      console.log(JSON.stringify(docs, undefined , 2))
    }, (err) => {
      console.log('unable to fetch data', err);

    })
  })
