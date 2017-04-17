angular.module('app')
	.controller('loginController', function($scope, $location, $rootScope) {
		var userData = JSON.parse(localStorage.getItem('UserData'));
		if(localStorage['UserData']) {
			$rootScope.loggedIn = true;
			$rootScope.data = userData;
		} else {
			$rootScope.loggedIn = false;
		}
		$scope.logUserIn = function() {

			var userData = JSON.parse(localStorage.getItem('UserData'));

			if (!userData) {
				alert("Please check Email or Password");
			}
			else if(userData && $scope.login.email === userData.email && $scope.login.password === userData.password) {
				
				$rootScope.loggedIn = true;
				console.log($rootScope.loggedIn);
				$location.path('/dashboard');
			}
			else {
				alert("Please check Email or Password");
			}
		};

		$scope.logout = function(){
			localStorage.clear();
			$rootScope.loggedIn = false;
			$location.path('/login').replace();
		};
			
});