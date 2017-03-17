var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  'id': String,
  'type': String,
  'username': String,
  'displayName': String,
  'email': String,
  'Roles': [String]
});

module.exports = mongoose.model('User', userSchema);
