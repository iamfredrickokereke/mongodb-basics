
// Create a MongoClient
var MongoClient = require('mongodb').MongoClient;

// Append the Database name (/slackname) you want to connect to the base URL.
var url = "mongodb://localhost:27017/kelly_eric";

// Admin
var Admin = "Kelly Eric";

// make client conect to mongodb service, pass 3 arguments.
MongoClient.connect( url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {

  //check if error  

  if (err) throw err;

  // Print to Console status.

  console.log("Database created by " + Admin);

  // close connection to db
 
  db.close();


});

