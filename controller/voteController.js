const db = require("../model");

// Defining methods for the voteController
module.exports = {
  create: function(req, res) {
    db.Mail
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .then(console.log('posted from controller'))
      .catch(err => res.status(422).json(err));
  },
};