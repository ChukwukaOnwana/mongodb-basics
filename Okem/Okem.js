var MongoClient = require('mongodb').MongoClient;
var insertCollection = require('./Interns');
var findCollection = require('./findInterns')
var updateCollections = require('./updateInterns');
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  insertCollection(db);
  findCollection(db);
  updateCollections(db);
});