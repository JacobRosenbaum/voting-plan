const router = require("express").Router();
const nodemailer = require('nodemailer');

router.route("/")
  .post((req, res) => {
    const name = req.body.mailFriendName1;
    const email = req.body.mailFriendEmail1;
 
    console.log(name)
    console.log(email);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'letsdosomething2020@gmail.com',
        pass: 'L3tsd0this!2020'
      }
    });

    const userOptions = emailOptions(name, email)

    transporter.sendMail(userOptions, function (error, info) {

      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
    res.end();
  });

function emailOptions(name, email) {
  console.log("from email options " + name)
  let emailOptions = {}
  emailOptions.from = 'letsdosomething2020@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'VOTE PLAN TEST';
  emailOptions.html = `<p> Hello ${name}! </p> <p style = "border-top: red 2px solid"> </p>`;
  emailOptions.attachments = [{
    filename: "voting plan", 
    content: "voting plan"
  }]
  return emailOptions
};


module.exports = router;