angular.module('app')
	.controller('dashboardController', function ($scope, $timeout, $rootScope, $uibModal, $http) {
		var userData = JSON.parse(localStorage.getItem('User-Data'));
		if(userData != null) {
			$rootScope.loggedIn = true;
			$rootScope.data = userData;
		} else {
			$rootScope.loggedIn = false;
		}
		$scope.displayImage = function(index){
			console.log(index);
			$rootScope.index = index;
			$scope.modalInstance = $uibModal.open({
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'views/modalWindow.html',
			controller :'ModelHandlerController',
			// controllerAs: '$ctrl',
			size: 'lg',
			resolve: {
				}
 			});
 		}
 		function getPosts() {
			$http.get('api/get-post').then(function(response) {
				$rootScope.posts = response.data;
				$scope.status = true;
				
				console.log($scope.posts);
			});
		}
		getPosts();
	});

	// .controller("ModelHandlerController", function($scope, $uibModalInstance){
 // 		getPosts();
 // 		$scope.msg= "hello";
	// 	$scope.cancelModal = function(){
	// 	console.log("cancelmodal");
	// 	$uibModalInstance.dismiss('close');
	// 	}
	// 	$scope.ok = function(){
	// 	$uibModalInstance.close('save');

	// 	}
	 
	// });