var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports.login = function(req, res){
	User.find(req.body, function(err, results){
		if(err){
			console.log("Error out");
		} 

		if(results && results.length === 1) {
			var userData = results[0];
			res.json({
						_id: userData._id,
						firstname: userData.firstname,
						lastname: userData.lastname,
						mnumber: userData.mnumber,
						username: userData.username,
						email: req.body.email
					});
			
		} 
	})
};