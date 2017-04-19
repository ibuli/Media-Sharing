var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports.display = function(req, res){
	Post.find({}, function(err, results){
		if(err){
			console.log("Error out");
		} else {
			res.json(results);
		} 
	})
};