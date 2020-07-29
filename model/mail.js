const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MailSchema = new Schema({
  name: {
      type: String,
      require: "Please type in your name"
  },
  email: {
    type: String,
    require: "Please type in your email address"
  },
  ballotCast: String, 
  fillAndMailBack: String,
})

const Mail = mongoose.model('votingPlanDB', MailSchema);

module.exports = Mail;