const User = require ('../dbModels/user');
const local = require ('./passport-strategies/local');

function configurePassport(app, passport) {
  passport.serializeUser((user, done) => {  	
  	done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
  	User.findById(id, (err, user) => {      
  		done(err, user)
  	})
  })

  passport.use(local)
}

module.exports.configurePassport = configurePassport;