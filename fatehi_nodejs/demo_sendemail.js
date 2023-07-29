var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'afatehi07@gmail.com',
    pass: 'alifatehi1383'
  }
});

var mailOptions = {
  from: 'afatehi07@gmail.com',
  to: 'seyedalifatehi1383@yahoo.com, mamalreza83@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: '<h1> Welcome </h1> <p> that was so easy! </p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});