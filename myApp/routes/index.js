var express = require('express');
var router = express.Router();
const messages = [ 
  { 
    text: "Hello mr.avesh katiyar!", 
    user: "Amit", 
    time: new Date() 
  }, 
  { 
    text: "Hello amit", 
    user: "avesh", 
    time: new Date() 
  } 
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',messages:messages});
});
router.get('/new', function(req, res, next) {
  res.render('form');
});
router.post('/new', function(req, res, next) {
  let data=req.body;
  messages.push({text:data.message,user:data.user,time:new Date()})
  res.redirect('/');
});
module.exports = router;
