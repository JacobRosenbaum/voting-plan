const router = require("express").Router();
const nodemailer = require('nodemailer');

router.route("/")
  .post((req, res) => {
    const name = req.body.mailFriendName1;
    const email = req.body.mailFriendEmail1;
    const friendName = req.body.nameMail

    console.log(name)
    console.log(email);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'votingplan@gmail.com',
        pass: 'jacobrocks11!'
      }
    });

    const userOptions = emailOptions(name, email, friendName)

    transporter.sendMail(userOptions, function (error, info) {

      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
    res.end();
  });

function emailOptions(name, email, friendName) {
  console.log("from mail email options friend 1")
  let emailOptions = {}
  emailOptions.from = 'votingplan@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'Make a Voting Plan!';
  emailOptions.html = `<div>
  
  Hi friend of ${friendName}!

  <br>
  <br>

  ${friendName} made a voting plan and thought you’d like to do the same.
  <br>
  
  <br>
  
  Did you know that writing down a plan makes us more likely to execute that plan? Cool, huh? So let’s all make a voting plan for the upcoming election!
  
  <br>
  <br>
  Are you in? Great! I knew I could count on you.
  <br>
  <br>
  
  <a href = "http://voting-plan.herokuapp.com" target = "blank">Click here</a> to make YOUR voting plan. It will take about 3 minutes and will be fun!
  <br>
  <br>
  
  xo,
  <br>
  <br>
  
  Jen @ Let’s DO Something!
  </div>`;
 
  return emailOptions
};


module.exports = router;