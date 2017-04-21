angular.module('app')
.controller("modalController",['$scope','$uibModal',function($scope, $uibModal){
 
	 $scope.openModal = function(){
		 $scope.modalInstance = $uibModal.open({
		 ariaLabelledBy: 'modal-title',
		 ariaDescribedBy: 'modal-body',
		 templateUrl: 'views/modalWindow.html',
		 controller :'ModelHandlerController',
		 controllerAs: '$ctrl',
		 size: 'lg',
		 resolve: {
		 }
 		});

 	}
 
}])

.controller("ModelHandlerController",function($scope, $uibModalInstance){
 
 $scope.cancelModal = function(){
 console.log("cancelmodal");
 $uibModalInstance.dismiss('close');
 }
 $scope.ok = function(){
 $uibModalInstance.close('save');
 
 }
 
});
