
// make client
var MongoClient = require('mongodb').MongoClient;

//Append the Database name (/slackname), you want to connect to the base URL.
var url = "mongodb://localhost:27017/kelly_eric";

var Admin = "Kelly Eric";

// make client connect to mongodb service/server
MongoClient.connect( url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {

  // db object that points to the database "kelly_eric"  and store in dbo

  var dbo = db.db("kelly_eric");

 //check if error
  
  if (err) throw err;
  console.log("Database created by " + Admin);

  // db pointing to kelly_eric
  console.log("Switched to "+dbo.databaseName+" database");

  // create 'users' collection in newdb database
  dbo.createCollection("interns", function(err, result) {

      if (err) throw err;
      console.log("Interns Collection has been created!");

      // close the connection to db
      db.close();
  });

});


