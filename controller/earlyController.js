const db = require("../model");

// Defining methods for the earlyController
module.exports = {
  create: function(req, res) {
    db.Early
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .then(console.log('posted from early controller'))
      .catch(err => res.status(422).json(err));
  },
};