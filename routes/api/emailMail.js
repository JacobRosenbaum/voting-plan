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
        user: 'jacobrosenbaum95@gmail.com',
        pass: 'Squidward11$'
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
  emailOptions.from = 'jacobrosenbaum95@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'VOTE PLAN';
  emailOptions.html = `<p> Hello ${name}! </p> <p> You will cast you ballot by ${castBallotHowMail}, and you will do it by ${mailBallotWhen}`;
  return emailOptions
};


module.exports = router;