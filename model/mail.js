const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MailSchema = new Schema({
  nameMail: {
      type: String,
      require: "Please type in your name"
  },
  emailMail: {
    type: String,
    require: "Please type in your email address"
  },
  castBallotHowMail: String, 
  mailBallotWhen: String,
})

const Mail = mongoose.model('votingPlanDB', MailSchema);

module.exports = Mail;