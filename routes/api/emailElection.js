const router = require("express").Router();
const nodemailer = require('nodemailer');

router.route("/")
  .post((req, res) => {

    const name = req.body.nameElection;
    const email = req.body.emailElection;
    const castBallotHowElection = req.body.castBallotHowElection;
    const whatTime = req.body.whatTimeElection;
    const getToPolls = req.body.getToPollsElection;
    const bringWith = req.body.bringWithElection;
    const takeOffWork = req.body.takeOffWork;

    console.log(name)
    console.log(email);
    console.log(castBallotHowElection);
    console.log(whatTime);
    console.log(getToPolls);
    console.log(bringWith);
    console.log(takeOffWork);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'letsdosomething2020@gmail.com',
        pass: 'L3tsd0this!2020'
      }
    });

    const userOptions = emailOptions(name, email,castBallotHowElection, whatTime, getToPolls, bringWith)

    transporter.sendMail(userOptions, function (error, info) {

      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
    res.end();
  });

function emailOptions(name, email,castBallotHowElection, whatTime, getToPolls, bringWith) {
  console.log("from election email options")
  let emailOptions = {}
  emailOptions.from = 'letsdosomething2020@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'VOTE PLAN TEST';
  emailOptions.html = `<p> Hello ${name}! </p> <p style = "border-top: red 2px solid"> You will cast your ballot ${castBallotHowElection}!`;
  emailOptions.attachments = [{
    filename: "voting plan", 
    content: "voting plan"
  }]
  return emailOptions
};


module.exports = router;