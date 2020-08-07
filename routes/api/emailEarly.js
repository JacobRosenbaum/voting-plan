const router = require("express").Router();
const nodemailer = require('nodemailer');

router.route("/")
  .post((req, res) => {

    const name = req.body.nameEarly;
    const email = req.body.emailEarly;
    const castBallotHowEarly = req.body.castBallotHowEarly;
    const whatDay = req.body.whatDay;
    const whatTime = req.body.whatTime;
    const getToPolls = req.body.getToPolls;
    const bringWith = req.body.bringWith;

    console.log(name)
    console.log(email);
    console.log(castBallotHowEarly);
    console.log(whatDay);
    console.log(whatTime);
    console.log(getToPolls);
    console.log(bringWith);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'letsdosomething2020@gmail.com',
        pass: 'L3tsd0this!2020'
      }
    });

    const userOptions = emailOptions(name, email,castBallotHowEarly, whatDay, whatTime, getToPolls, bringWith)

    transporter.sendMail(userOptions, function (error, info) {

      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
    res.end();
  });

function emailOptions(name, email,castBallotHowEarly, whatDay, whatTime, getToPolls, bringWith) {
  console.log("from early email options")
  let emailOptions = {}
  emailOptions.from = 'letsdosomething2020@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'VOTE PLAN TEST';
  emailOptions.html = `<p> Hello ${name}! </p> <p style = "border-top: red 2px solid"> You will cast your ballot ${castBallotHowEarly}, and you will do it ${whatDay}!`;
  emailOptions.attachments = [{
    filename: "voting plan", 
    content: "voting plan"
  }]
  return emailOptions
};


module.exports = router;