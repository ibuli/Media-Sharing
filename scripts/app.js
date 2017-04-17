angular.module('app', ['ui.router', 'ngFileUpload'])

	.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider){
		
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('app',{
				url: '/',
				templateUrl: 'views/app.html'
			})

			.state('dashboard',{
				url: '/dashboard',
				templateUrl: 'views/dashboard.html',
				controller: 'dashboardController',
				requireLogin: true
			})

			.state('signup',{
				url: '/signup',
				templateUrl: 'views/signup.html',
				controller: 'signupController'
			})
			
			.state('login',{
				url: '/login',
				templateUrl: 'views/login.html',
				controller: 'loginController'
			})
			.state('profile', {
				url: '/profile',
				templateUrl: 'views/profile.html',
				requireLogin: true
			})
			.state('users', {
				url: '/users',
				templateUrl: 'views/users.html',
				controller: 'userController',
				requireLogin: true
			})
			.state('contact', {
				url: '/contact-us',
				templateUrl: 'views/contact.html',
				controller: 'contactController',
				requireLogin: true
			})

		}])

	.run(function($rootScope) {
		$rootScope.$on("$stateChangeStart", function(event, toState, fromState) {
			if(toState.requireLogin && !$rootScope.loggedIn) {
				alert("Please Login!!");
				event.preventDefault();
			}
			else if(toState.name == 'login' && $rootScope.loggedIn) {
				alert("Already Logged In");
				event.preventDefault();
			}
			else if(toState.name == 'signup' && $rootScope.loggedIn) {
				alert("Already Registered");
				event.preventDefault();
			}
		})
	});