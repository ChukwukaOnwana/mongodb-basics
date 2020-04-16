const findCollection = function (db) {
var dbo = db.db("crud-basics");
/*dbo.collection("myMovies").findOne({}, function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});

dbo.collection("myMovies").find({}).toArray(function(err, result) {
    if (err) throw err;
    result.forEach(element => {
        if (element.rating === 7) {
            console.log(element)
        }
    });
    db.close();
  });*/

  /*dbo.collection("myMovies").find({}, { projection: { _id: 0, movie: 1, year: 0, rating: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });*/
}

module.exports = findCollection;