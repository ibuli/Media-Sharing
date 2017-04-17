angular.module('app')
	.controller('dashboardController', ['$scope', 'Upload', '$timeout', '$rootScope', function ($scope, Upload, $timeout, $rootScope) {
		var userData = JSON.parse(localStorage.getItem('UserData'));
		if(localStorage['UserData']) {
			$rootScope.loggedIn = true;
			$rootScope.data = userData;
		} else {
			$rootScope.loggedIn = false;
		}

		$scope.uploadPic = function(file) {
		    file.upload = Upload.upload({
		    	url: 'http://localhost:8080/uploads',
		    	data: {
		      			username: $scope.username, 
		      		 	file: file
		      		}
		    	});

		    file.upload.then(function (response) {
		      $timeout(function () {
		        file.result = response.data;
		      	// console.log(file.result);
		      });
		    }, function (response) {
		      if (response.status > 0)
		        $scope.errorMsg = response.status + ': ' + response.data;
		    }, function (evt) {
		      // Math.min is to fix IE which reports 200% sometimes
		      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
		    });
		}
	}]);