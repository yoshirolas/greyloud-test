const express = require('express');
const router = express.Router();
const passport = require('passport');
const local = require ('../config/passport-strategies/local');


router.post('/*', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {    
    
    if(err) return next(err)
    if(!user) {
      return res.json({ success: false, message: info.message })      
    }

    req.logIn(user, loginErr => {
      if(loginErr) {
        return res.json({ success: false, message: loginErr })
      }
      return res.json({ success: true, message: "authentication succeeded" })
    })
  })(req, res, next)
});

module.exports = router;
