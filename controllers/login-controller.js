angular.module('app')
	.controller('loginController', function($scope, $location, $rootScope, $http) {
		var userData = JSON.parse(localStorage.getItem('User-Data'));
		if(localStorage['User-Data']) {
			$rootScope.loggedIn = true;
			$rootScope.data = userData;
		} else {
			$rootScope.loggedIn = false;
		}
		$scope.logUserIn = function(){
			$http.post('api/user/login', $scope.login).then(function(response){
				localStorage.setItem('User-Data', JSON.stringify(response.data));
				console.log(localStorage);
				
				// $rootScope.loggedIn = true;
				
				if(localStorage['User-Data'] != null){
					$rootScope.loggedIn = true;
					$location.path('/dashboard');
					console.log($rootScope.loggedIn);
				}
				// var userData = JSON.parse(localStorage.getItem('User-Data'));

				// if (!userData) {
				// 	alert("Please check Email or Password");
				// }
				// else if(userData && $scope.login.email === userData.email && $scope.login.password === userData.password) {
				// 	$rootScope.loggedIn = true;
				// 	console.log($rootScope.loggedIn);
				// 	$location.path('/dashboard');
				// }
				// else {
				// 	alert("Please check Email or Password");
				// }
				
			},function(err){
				alert('Bad login credentials');
			}).catch(function(error){
				console.log(error);
			});
		};

		$scope.logout = function(){
			localStorage.clear();
			$rootScope.loggedIn = false;
			$location.path('/login').replace();
		};
			
});