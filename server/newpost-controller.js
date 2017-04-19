var mongoose = require('mongoose');
var fs = require('fs-extra');
var path = require('path');

var postSchema = new mongoose.Schema({
	userId: String,
	username: String,
	email: String,
	imgPath: {
		type: String,
		default: ''
	},
	content: {
		type: String,
		default: ''
	},
	post_created_at: {
		type: Date, 
		default: Date.now
	}
});

var Post = mongoose.model('Post', postSchema);

module.exports.upload = function(req, res) {
	var file = req.files.file;
	var userId = req.body.userId;
	// var username = req.body.username;
	// var email = req.body.email;

	console.log("User " + userId + " is submitting " , file);

	var tempPath = file.path;
	var targetPath = path.join(__dirname, "../uploads/" + userId + file.name);
	var savepath = "/uploads/" + userId + file.name; 

	fs.rename(tempPath, targetPath, function(err){
		if(err){
			console.log(err);
		}
		else {
			
			var post = new Post(req.body);
			console.log(post);
			
			post.imgPath = savepath;


			post.save(function(err, results) {
				if(err){
					console.log(err);
					console.log("Failed Save");
				} else{
					console.log("Saved successfully");
					var postData = results;
					res.json(postData);
					console.log(postData.imgPath);
				}
			})
		}
	})
};