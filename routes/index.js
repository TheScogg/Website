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

/* GET clock */
router.get('/game', function(req, res, next) {
  res.render('game', { title: 'Game' });
});

router.get('/pictorama', function(req, res, next) {
  res.render('pictorama', { title: 'Pictorama'})
});

router.post('/sendMail', function(req, res) {
  console.log(req);
  let transporter = nodemailer.createTransport({
      service: "Zoho",
      auth: {
          user: 'james@thescogg.com',
          pass: 'fogerty21',
      }
  });

  let HelperOptions = {
      from: '"TheScogg.com" <james@thescogg.com>',
      to: 'james@thescogg.com',
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
