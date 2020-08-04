const router = require("express").Router();
const nodemailer = require('nodemailer');

router.route("/")
  .post((req, res) => {
    const name = req.body.nameMail;
    const email = req.body.emailMail;
    const castBallotHowMail = req.body.castBallotHowMail;
    const mailBallotWhen = req.body.mailBallotWhen;

    console.log(name)
    console.log(email);
    console.log(castBallotHowMail);
    console.log(mailBallotWhen);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'letsdosomething2020@gmail.com',
        pass: 'L3tsd0this!2020'
      }
    });

    const userOptions = emailOptions(name, email, castBallotHowMail, mailBallotWhen)

    transporter.sendMail(userOptions, function (error, info) {

      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
    res.end();
  });

function emailOptions(name, email, castBallotHowMail, mailBallotWhen) {
  console.log("from email options " + name)
  let emailOptions = {}
  emailOptions.from = 'letsdosomething2020@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'VOTE PLAN TEST';
  emailOptions.html = `<p> Hello ${name}! </p> <p style = "border-top: red 2px solid"> You will cast you ballot ${castBallotHowMail}, and you will do it ${mailBallotWhen}!`;
  emailOptions.attachments = [{
    filename: "voting plan", 
    content: "voting plan"
  }]
  return emailOptions
};


module.exports = router;