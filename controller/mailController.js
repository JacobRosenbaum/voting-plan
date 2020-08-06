const db = require("../model");

// Defining methods for the mailController
module.exports = {
  create: function(req, res) {
    db.Mail
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .then(console.log('posted from mail controller'))
      .catch(err => res.status(422).json(err));
  },
};