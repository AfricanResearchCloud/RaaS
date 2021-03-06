module.exports = function(app, passport) {
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email', session: false }));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect : '/profile',
      failureRedirect : '/'
    }));
}
