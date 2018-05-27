const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/*', function(req, res, next) {
  console.log(passport)
  passport.authenticate('local',
    function(err, user, info) {
      return err 
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.redirect('/');
            })
          : res.redirect('/');
    }
  )(req, res, next);
});

module.exports = router;
