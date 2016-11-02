'use strict';

/**
 * @ngdoc function
 * @name hcmBetaGruntApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the hcmBetaGruntApp
 */
angular.module('hcmBetaGruntApp')
  .controller('LoginCtrl', function ($scope, $location, $timeout, $window, awsService) {
	
		$scope.errorFlag = '';
		
		$scope.addUser = function addUser(){
		awsService.addNewUser($scope.name, $scope.pwd, function (err,data)  {
		if (err){ 
			$timeout(function () {
				$scope.currentPath = $location.path( 'about' );
			}, 0);
			console.log(err, err.stack); // an error occurred
		}
		else{	console.log(data);           // successful response
				$timeout(function () {
				$scope.currentPath = $location.path( 'contact' );
			}, 0);
		}
		});
		};
		
		$scope.login = function login(){
		var tableName = 'HCMUsers';
		var param = 'username';
		awsService.queryTable(param, $scope.name, tableName, afterLoggingIn);
		function afterLoggingIn(res){
		if(res.Items[0].password == $scope.pwd){
			$timeout(function () {
				$scope.currentPath = $location.path( 'loggedIn' );
			}, 0);
			$window.localStorage.setItem(name,$scope.name);
		} 
		else {
			$timeout(function () {
				$scope.errorFlag = 'true';
			}, 0);
		}
		};
		};
	
  });
