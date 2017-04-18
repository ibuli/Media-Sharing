angular.module('app')
	.controller('dashboardController', function ($scope, $timeout, $rootScope) {
		var userData = JSON.parse(localStorage.getItem('User-Data'));
		if(userData != null) {
			$rootScope.loggedIn = true;
			$rootScope.data = userData;
		} else {
			$rootScope.loggedIn = false;
		}
	});