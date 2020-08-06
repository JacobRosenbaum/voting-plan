const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EarlySchema = new Schema({
  nameEarly:  String,
  emailEarly: String,
  castBallotHowEarly: String, 
  whatDay: String,
  whatTime: String, 
  getToPolls: String, 
  bringWith: String
})

const Early = mongoose.model('early', EarlySchema);

module.exports = Early;