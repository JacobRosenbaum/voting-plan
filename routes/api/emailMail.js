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
  console.log("from mail email options")
  let emailOptions = {}
  emailOptions.from = 'letsdosomething2020@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'VOTE PLAN TEST';
  emailOptions.html = `<p> Hello ${name}! </p> <p style = "border-top: red 2px solid"> You will cast your ballot ${castBallotHowMail}, and you will do it ${mailBallotWhen}!
  <br>
  <a href="http://twitter.com/share?text=Check%20out%20this%20voting%20plan%20tool%20%23votingplan%20%23govote%20%23letsDOsomething&url=https://voting-plan.herokuapp.com">Tweet</a>

</a>
<br>
<div 
class="fb-share-button" 
data-href="https://voting-plan.herokuapp.com"
 data-layout="button" 
 data-size="large"
 >
 <a target="_blank"
  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvoting-plan.herokuapp.com%2F&amp;src=sdkpreparse"
   class="fb-xfbml-parse-ignore">Share on FB</a></div></div>`;
  emailOptions.attachments = [{
    filename: "voting plan", 
    content: "voting plan"
  }]
  return emailOptions
};


module.exports = router;