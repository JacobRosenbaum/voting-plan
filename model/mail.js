const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MailSchema = new Schema({
  nameMail: String,
  emailMail: String,
  castBallotHowMail: String, 
  mailBallotWhen: String,
})

const Mail = mongoose.model('mail', MailSchema);

module.exports = Mail;