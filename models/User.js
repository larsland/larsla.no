var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
    name: String,
    surname: String,
    username: String,
    password: String,
    isAdmin: false
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);
