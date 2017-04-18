angular.module('app')

	.controller('signupController', function($scope, $location, $http) {
		
		$scope.createUser = function() {

			// localStorage.setItem('UserData', JSON.stringify($scope.newUser));
			// $scope.newUser = "";
			// $location.path('/dashboard');
			// alert("Successfully Signed up!");


			$http.post('api/user/signup', $scope.newUser).then(function(response){
					console.log(response.data);
					alert('Successfully signed up');
					//localStorage.setItem('User-Data', JSON.stringify(response.data));
					$location.path('/login');
				}).catch(function(error){
					console.log(error);
				})
		}
	});