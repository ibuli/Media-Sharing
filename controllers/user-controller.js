angular.module('app')
	.controller('userController', function($scope, $http) {
		$http.get('../users.json') //reading the student.json file
            
            .then(function(data){
                    $scope.users = data; // binding the data to the $scope variable
                	console.log($scope.users.data);
                })
            .catch(function(data, status) {
                    console.error('failure loading the users record', status, data);
                    $scope.users = { }; //return blank record if something goes wrong
            })
    });  