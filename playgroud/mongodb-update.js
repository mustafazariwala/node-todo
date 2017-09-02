const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('There is an error')
  };
  console.log('Connected to the server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59aacc71b52cef22fc522223')
  // },{
  //   $set : {Completed:true}
  // },{
  //   returnOrignal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    name: 'abdeali'
  },{
    $inc: {age:1}
  },{
    returnOrignal: false
  }).then((result) => {
    console.log(result);
  })
  // db.close();
})
