var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../app/models/user');
var configAuth = require('./auth');

module.exports = function(passport) {
  passport.use(new FacebookStrategy({
    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : configAuth.facebookAuth.callbackURL,
    passReqToCallback : true
  },
  function(req, token, refreshToken, profile, done) {
      process.nextTick(function() {
         User.findOne({ 'id' : profile.id , 'type': 'facebook'}, function(err, user) {
           if (err) return done(err);
           if (user) {
             return done(null, user);
         } else {
           var newUser = new User();
           newUser.type = 'facebook';
           newUser.id = profile.id;
           newUser.username = profile.username;
           newUser.displayName = profile.displayName;
           //newUser.email = profile.emails[0].value;
           newUser.Roles = ['User'];
           newUser.save(function(err) {
             if (err) throw err;
             return done(null, newUser);
           });
         }
      });
    });
  }));
}
