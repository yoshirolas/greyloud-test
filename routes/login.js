const express = require('express');
const router = express.Router();
const passport = require('passport');
const local = require ('../config/passport-strategies/local');
const User = require('../dbModels/user.js');


// router.post('/*', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {    
    
//     if(err) return next(err)
//     if(!user) {
//       return res.json({ success: false, message: info.message })      
//     }

//     req.logIn(user, loginErr => {
//       if(loginErr) {
//         return res.json({ success: false, message: loginErr })
//       }
//       return res.json({ success: true, message: "authentication succeeded" })
//     })
//   })(req, res, next)
// });

router.post('/*', function(req, res, next) {

  User.findOne({ username: req.body.username }, (err, user) => {

    if(err) return next(err);
    if (!user) {     

      res.json({ 
        success: false, 
        message: "Can't find this user",
        messageField: 'username'
      });
      return

    } else if (user.password !== req.body.password) {

      res.json({ 
        success: false, 
        message: "Incorrect password",
        messageField: 'password'
      });
      return
      
    } else {
      res.json({ success: true, user: req.body.username });
      return 
    }
  })
});

module.exports = router;
