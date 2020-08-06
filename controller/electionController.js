const db = require("../model");

// Defining methods for the electionController
module.exports = {
  create: function(req, res) {
    db.Election
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .then(console.log('posted from election controller'))
      .catch(err => res.status(422).json(err));
  },
};