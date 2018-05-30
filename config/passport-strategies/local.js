const LocalStrategy = require('passport-local').Strategy;
const User = require('../../dbModels/user');


// export default new LocalStrategy({
// usernameField: "email"
// }, (email, password, done) => { 	
// 	User.findOne({email}, (err, user) => {
// 		if(!user) return done(null, false, { message: `Email ${email} not found` })
// 		user.comparePassword(password, (err, isMatch) => {
// 			if (isMatch) {
// 				return done(null, user)
// 			} else {
// 				return done(null, false, { message: "Invalid email or password" })
// 			}

// 		})
// 	})
// })

const local = new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
);

module.exports = local;