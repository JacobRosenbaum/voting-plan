const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ElectionSchema = new Schema({
  nameElection:  String,
  emailElection: String,
  castBallotHowElection: String, 
  whatTimeElection: String,
  getToPollsElection: String, 
  bringWithElection: String, 
  takeOffWork: String
})

const Election = mongoose.model('election', ElectionSchema);

module.exports = Election;
