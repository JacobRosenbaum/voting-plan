const router = require("express").Router();
const nodemailer = require('nodemailer');

router.route("/")
  .post((req, res) => {

    const name = req.body.nameElection;
    const email = req.body.emailElection;
    const castBallotHowElection = req.body.castBallotHowElection;
    const whatTime = req.body.whatTimeElection;
    const getToPolls = req.body.getToPollsElection;
    const bringWith = req.body.bringWithFriendElection;
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
        user: 'votingplan@gmail.com',
        pass: 'ekpldvohxgdprtya'
      }
    });

    const userOptions = emailOptions(name, email, castBallotHowElection, whatTime, getToPolls, bringWith, takeOffWork)

    transporter.sendMail(userOptions, function (error, info) {

      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.end();
  });

function emailOptions(name, email, castBallotHowElection, whatTime, getToPolls, bringWith, takeOffWork) {
  console.log("from election email options")
  let emailOptions = {}
  emailOptions.from = 'votingplan@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'My Voting Plan';
  emailOptions.html = `
  
  Hi ${name}!
  <br>
<br>
  Amazing work making your voting plan. Think of it as a vision board, for democracy. <br> <br>
  
  Here is YOUR personalized voting plan! 🎉 
  <br> 
  <br> 
  <div style = "font-family: Gotham Light, sans-serif;border: #EF3D55 2px solid;border-radius:20px; text-align: center; padding-left: 10px; padding-right: 10px; width: 300px; height: 300px; color: #004789">
  <h4 style = "font-weight:bolder; font-size: 1.3rem !important;">
      ${name}'s Voting Plan
      </h4>
     <div style = "font-size: .8rem">
     I will cast my ballot in person, on election day on November 8th! 
     <br/>
     <br/>
     I plan to vote ${whatTime}!
     <br/>
     <br/>
     ${takeOffWork}!
     <br/>
     <br/>
     I will ${getToPolls} to the polls! 
     <br/>
     <br/> 
     ${bringWith}

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
  
  Jen @ <a href = "http://votingplan.org"> votingplan.org </a> <br>
  <br>
  P.S. Do you have any more questions about how to vote in your state? We love helping people vote, so don’t hesitate to send us a note at <a href = "votingplan@gmail.com">votingplan@gmail.com</a> and we will reply ASAP with a simple answer.`
//`
  
//   Hi ${name}!
//   <br>
// <br>
//   Amazing work making your voting plan. Think of it as a vision board, for democracy.
  
//   Here is YOUR personalized voting plan! 🎉 
//   <div style = "font-family: Gotham, sans-serif;border: #EF3D55 2px solid; text-Align: center;padding-left: 2px; padding-right: 2px; width: 50%; margin-bottom: 10px; margin-top: 10px; color: #004789">
//   <h2> My Voting Plan </h2>
//   <h3 style = "text-Align: left; padding-left: 4px">
//   When will I cast my ballot?  <span style = "color: #EF3D55; text-align: right"> In person, on election day! </span>
//  <br>
//  <br>
// What time will I vote?<span style = "color: #EF3D55; text-align: right"> I plan to vote ${whatTime}! </span>
//  <br>
//  <br>
//   How will I get to the polls?  <span style = "color: #EF3D55; text-align: right">I will ${getToPolls} to the polls and bring ${bringWith} with me!</span>
//  <br>
//  <br>
//  Do I need chilcare? <span style = "color: #EF3D55; text-align: right"> ${takeOffWork}</span>
//  </h3>
//  </div>
  
//   Sweet! What next? 2 things:
//   Add this plan to your personal calendar 🗓 right now. 
//   Help 🇺🇸 by spreading the word 🗣! 
//   <br>
//   Share the Voting Plan site on <span
//   class="fb-share-button" 
//   data-href="https://voting-plan.herokuapp.com"
//    data-layout="button" 
//    data-size="large"
//    >
//    <a target="_blank"
//     href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvoting-plan.herokuapp.com%2F&amp;src=sdkpreparse"
//      class="fb-xfbml-parse-ignore">Facebook</a></span>, 
//      <a href="http://twitter.com/share?text=Check%20out%20this%20voting%20plan%20tool%20%23VotingPlan%20%23MakeAPlan%20%23letsDOsomething&url=https://voting-plan.herokuapp.com">Twitter</a>,
//       or <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://voting-plan.herokuapp.com"> LinkedIn</a>
//      so others know how awesome it is to #MakeAPlan.
//      <br>
//      <br>
//   xo,
//   <br>
//   <br>
  
//   Jen @ Let’s DO Something!
//   <br>
//   <br>
  
//   P.S. Want inspiration for why and how to take civic action (slightly) beyond voting? Follow Let’s DO Something on <a href="https://www.instagram.com/ldsomething/" target="_blank">Instagram</a>, <a href="https://www.facebook.com/LDSomething" target="_blank"> Facebook </a>, or <a href="https://twitter.com/LDoSomething" target="_blank">Twitter</a>`
  emailOptions.attachments = [
    {
      filename: 'My Voting Plan.html',
      content: ` 
      <div class = "container" style = "text-align: center">
      <div class = "jumbotron" style = "text-align: center">
      <div style = "margin-left: 20%;font-family: Gotham Light, sans-serif;border: #EF3D55 2px solid;border-radius:20px; text-align: center; margin-top: 100px; padding-left: 10px; padding-right: 10px; width: 600px; height: 600px; color: #004789">
      <h4 style = "font-weight:bolder;padding-top: 3px; font-size: 2.1rem !important;">
          ${name}'s Voting Plan
          </h4>
          <div style = "font-size: 1.5rem">
          I will cast my ballot in person, on election day on November 8th! 
          <br/>
          <br/>
          <br/> 
          I plan to vote ${whatTime}!
          <br/>
          <br/>
          <br/>
          ${takeOffWork}!
          <br/>
          <br/> 
          <br/>
          I will ${getToPolls} to the polls! 
          <br/>
          <br/> 
          <br/> 
          ${bringWith}
          </div>
         </div>
         </div>
         </div>
        `
    }
  ]
  return emailOptions
};


module.exports = router;