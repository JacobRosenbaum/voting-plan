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
        user: 'votingplan@gmail.com',
        pass: 'jacobrocks11!'
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
  emailOptions.from = 'votingplan@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'My Voting Plan!';
  emailOptions.html = `
  
  Hi ${name}!
  <br>
<br>
  Amazing work making your voting plan. Think of it as a vision board, for democracy. <br> <br>
  
  Here is YOUR personalized voting plan! 🎉 
  <br> 
  <br> 
  <div style = "font-family: Gotham Light, sans-serif;border: #EF3D55 2px solid;border-radius:20px; text-align: center; padding-left: 10px; padding-right: 10px; width: 300px; height: 300px; color: #004789">
  <h4 style = "font-weight:bolder; padding-top: 10%; font-size: 1.3rem !important;">
      ${name}'s Voting Plan
      </h4>
      <br>
     <div style = "font-size: 1rem">
  I will cast my ballot by mail! <br/> <br/>And I will do it ${mailBallotWhen}!
 </div>
  </div>
  <br> 
  
  Sweet! What next? 2 things: 
  <ol>
  <li>Add this plan to your personal calendar 🗓 right now. </li>
  <li>
  Help 🇺🇸 by spreading the word 🗣! 
  Share the Voting Plan site on <span
  class="fb-share-button" 
  data-href="https://votingplan.org"
   data-layout="button" 
   data-size="large"
   >
   <a target="_blank"
    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvotingplan.org%2F&amp;src=sdkpreparse"
     class="fb-xfbml-parse-ignore">Facebook</a></span>, 
     <a href="http://twitter.com/share?text=Check%20out%20this%20voting%20plan%20tool%20%23VotingPlan%20%23MakeAPlan%20%23letsDOsomething&url=https://votingplan.org">Twitter</a>,
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=http://votingplan.org">LinkedIn</a>, or <a href = "https://instagram.com">Instagram</a>
     so others know how awesome it is to #MakeAPlan.
     </li>
     </ol>


     And, of course, V-O-T-E 😊
     <br>
     <br>

  xo,
  <br>
  <br>
  
  Jen @ <a href = "http://votingplan.org"> votingplan.org </a> `
  
  
  emailOptions.attachments =[
    {
        filename: 'My Voting Plan.html',
        content: ` 
        <div class = "container" style = "text-align: center">
        <div class = "jumbotron" style = "text-align: center">
        <div style = "margin-left: 40%;font-family: Gotham Light, sans-serif;border: #EF3D55 2px solid;border-radius:20px; text-align: center; margin-top: 100px; padding-left: 10px; padding-right: 10px; width: 300px; height: 300px; color: #004789">
        <h4 style = "font-weight:bolder;padding-top: 10%; font-size: 1.3rem !important;">
            ${name}'s Voting Plan
            </h4>
            <br>
           <div style = "font-size: 1rem">
        I will cast my ballot by mail! <br/> <br/>And I will do it ${mailBallotWhen}!
       </div>
        </div>
        </div>
        </div>
        `
    }
  ]
;
  
  return emailOptions
};


module.exports = router;