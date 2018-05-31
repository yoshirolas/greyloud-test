const express = require('express');
const router = express.Router();
const User = require('../dbModels/user.js');


router.post('/*', function(req, res, next) {

  User.findOne({ username: req.body.username }, (err, user) => {

    if (err) return next(err);
    if (user) {     
      res.json({ 
        success: false, 
        message: "This name already in use",
        messageField: 'username'
      })
      return 

    } else {
      User.create(req.body, (err) => {
        if (err) {
          console.error(err)
          res.json({ success: false })
          return
        }

        res.json({ success: true, user: req.body.username })
        return 
      })
    }
  })
});

module.exports = router;