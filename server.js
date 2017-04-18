//Require our dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

//use body parser
app.use(bodyParser.json());

//concction url for mongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ms', function(){
	console.log("we are connected");
});

var signUpController = require('./server/signup-controller.js');
var loginController = require('./server/login-controller.js');

//set static files (css and images, etc) location
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/', express.static(__dirname + '/'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/uploads', express.static(__dirname + '/uploads'));


app.post('/api/user/signup', signUpController.signup);
app.post('/api/user/login', loginController.login);

//start our app
app.listen(process.env.PORT || '3000', function(){
	console.log("Listening on port 3000");
});