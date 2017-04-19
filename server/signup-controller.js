var mongoose = require('mongoose');

//var User = mongoose.model("User");

var userSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	mnumber: Number,
	username: String,
	email: String,
	password: String,
	acc_created_at: {
		type: Date, 
		default: Date.now
	}
});

var User = mongoose.model('User', userSchema);
module.exports.signup = function(req, res){
	var user = new User(req.body);
	user.save();
	res.json(req.body);
}

