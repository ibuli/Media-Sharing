angular.module('app')
	.controller('contactController', function($scope) {
		$scope.submit = function() {
			alert("Thank you for contacting us.!!");
		}
	});