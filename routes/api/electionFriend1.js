const router = require("express").Router();
const nodemailer = require('nodemailer');

router.route("/")
  .post((req, res) => {
    const name = req.body.electionFriendName1;
    const email = req.body.electionFriendEmail1;
    const friendName = req.body.nameElection
 
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
  console.log("from election email options friend 1")
  let emailOptions = {}
  emailOptions.from = 'votingplan@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'Make a Voting Plan!';
  emailOptions.html = `<div>
  
  Hi ${name}!

  <br>
  <br>

  Your friend ${friendName} made a voting plan and thought you’d like to do the same.
  <br>
  
  <br>
  
  Did you know that writing down a plan makes us more likely to execute that plan? Cool, huh? So let’s all make a <a href = "http://votingplan.org" target = "blank">voting plan</a> for the upcoming election!  
  <br>
  <br>
  Are you in? Great! I knew I could count on you.
  <br>
  <br>
  
  <a href = "http://votingplan.org" target = "blank">Click here</a> to make YOUR voting plan. It will take about 3 minutes and will be fun!
  <br>
  <br>
  
  xo,
  <br>
  <br>
  
  Jen @ votingplan.org!
  </div>`
  return emailOptions
};


module.exports = router;