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
        user: 'votingplan@gmail.com',
        pass: 'jacobrocks11!'
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
  emailOptions.from = 'votingplan@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'My Voting Plan';
  emailOptions.html = `
  
  Hi ${name}!
  <br>
<br>
  Amazing work making your voting plan. Think of it as a vision board, for democracy.
  
  Here is YOUR personalized voting plan! 🎉 
  <div style = "font-family: Gotham, sans-serif;border: #EF3D55 2px solid; text-Align: center;padding-left: 2px; padding-right: 2px; width: 50%; margin-bottom: 10px; margin-top: 10px; color: #004789">
  <h2> My Voting Plan </h2>
  <h3>
  I will cast my ballot in person, early! 
  <br>
  I plan to vote on ${whatDay}, ${whatTime}!
  <br>
  I will ${getToPolls} to the polls and I will bring ${bringWith} with me!
I will
  </h3>
  </div>
  
  Sweet! What next? 2 things:
  Add this plan to your personal calendar 🗓 right now. 
  Help 🇺🇸 by spreading the word 🗣! 
  <br>
  Share the Voting Plan site on <span
  class="fb-share-button" 
  data-href="https://voting-plan.herokuapp.com"
   data-layout="button" 
   data-size="large"
   >
   <a target="_blank"
    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvoting-plan.herokuapp.com%2F&amp;src=sdkpreparse"
     class="fb-xfbml-parse-ignore">Facebook</a></span>, 
     <a href="http://twitter.com/share?text=Check%20out%20this%20voting%20plan%20tool%20%23VotingPlan%20%23MakeAPlan%20%23letsDOsomething&url=https://voting-plan.herokuapp.com">Twitter</a>,
      or <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://voting-plan.herokuapp.com"> LinkedIn</a>
     so others know how awesome it is to #MakeAPlan.
     <br>
     <br>
  xo,
  <br>
  <br>
  
  Jen @ Let’s DO Something!
  <br>
  <br>
  
  P.S. Want inspiration for why and how to take civic action (slightly) beyond voting? Follow Let’s DO Something on <a href="https://www.instagram.com/ldsomething/" target="_blank">Instagram</a>, <a href="https://www.facebook.com/LDSomething" target="_blank"> Facebook </a>, or <a href="https://twitter.com/LDoSomething" target="_blank">Twitter</a>`
  emailOptions.attachments =[
    {
        filename: 'My Voting Plan.html',
        content: ` 
        <div style = "font-family: Gotham, sans-serif; border: #EF3D55 2px solid; text-Align: center; padding-left: 2px; padding-right: 2px;width: 50%; margin-left: 25%; margin-bottom: 200px; margin-top: 200px; color: #004789">
        <h2> My Voting Plan </h2>
        <h3>
        I will cast my ballot in person, early! 
        <br>
        I plan to vote on ${whatDay}, ${whatTime}!
        <br>
        I will ${getToPolls} to the polls and I will bring ${bringWith} with me!
        </h3>
        </div>
        `
    }
  ]
  return emailOptions
};


module.exports = router;