angular.module('app')

	.controller('signupController', function($scope, $location) {
		
		$scope.createUser = function() {

			localStorage.setItem('UserData', JSON.stringify($scope.newUser));
			$scope.newUser = "";
			$location.path('/dashboard');
			alert("Successfully Signed up!");
		}
	});