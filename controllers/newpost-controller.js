angular.module('app')

	.controller('newpostController', function($scope, Upload, $http) {
		
		$scope.upload = function(file) {
			if ($scope.form.file.$valid && $scope.file) {
	        	Upload.upload({
	            url: 'api/upload',
	            method: 'POST',
	            data: {userId: $scope.data._id,
	            	   email: $scope.data.email,
	            	   username: $scope.data.username,
	            	   content: $scope.content
	            	  },
	            file: file
		        }).progress(function(evt){
					file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            	// console.log('progress: ' + progress + '% ' + evt.config.data.filename);
				}).success(function(data){
					//Here comes all the post data.
					$scope.postData = data;
					console.log($scope.postData);
					$scope.file.result = true;
					getPosts();
				}).error(function(error){
	        		$scope.errorMsg = "Something went wrong";
				});
			}
		    else {
		      	alert ("please select file");
		    }
		};

		function getPosts() {
			$http.get('api/get-post').then(function(response) {
				$scope.posts = response.data;
				$scope.status = true;
				console.log($scope.posts);
			});
		}

		getPosts();
	});