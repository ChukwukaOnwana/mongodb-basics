const updateCollections = function (db) {
var dbo = db.db("crud-basics");
  var myquery = { movie: "The Banker" };
  var newvalues = { $set: {movie: "Jumanji", year: "2019", rating: 6.7 } };
  dbo.collection("myMovies").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result);
    db.close();
  });
}

module.exports = updateCollections;