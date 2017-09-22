var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET drum kit */
router.get('/drumkit', function(req, res, next) {
  res.render('drumkit', { title: 'Drum Kit' });
});

/* GET clock */
router.get('/clock', function(req, res, next) {
  res.render('clock', { title: 'Clock' });
});

router.get('/pictorama', function(req, res, next) {
  res.render('pictorama', { title: 'Pictorama'})
});

router.post('/sendMail', function(req, res) {
  console.log(req);
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      port: 25,
      auth: {
          user: 'thescogg@gmail.com',
          pass: 'Bjq03dX7xBg6fmpnR2Zg',
      },
      tls: {
          rejectUnauthorized: false
      }
  });

  let HelperOptions = {
      from: '"TheScogg.com" <thescogg@gmail.com>',
      to: 'thescogg@gmail.com',
      subject: 'TheScogg.com Contact',
      text: 'Name: ' + req.body.name + "\nPhone: " + req.body.phone + "\nEmail: " + req.body.email + "\nMessage: " + req.body.message
  };

  transporter.sendMail(HelperOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }


  });
});

module.exports = router;
