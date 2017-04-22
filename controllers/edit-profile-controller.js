angular.module('app')

	.controller('editProfileController', function($rootScope, $http, $scope) {
		console.log($rootScope.data);

		$scope.editProfile = function() {
			$scope.edit = true;
		}

		$scope.save = function() {
			
		}
		$scope.cancel = function() {
			$scope.edit = false;
		}
	});