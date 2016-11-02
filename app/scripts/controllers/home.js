'use strict';

/**
 * @ngdoc function
 * @name hcmBetaGruntApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the hcmBetaGruntApp
 */
angular.module('hcmBetaGruntApp')
  .controller('HomeCtrl', function ($scope, $window, $timeout, awsService) {
		var tableName = 'HCMData';
		var param = 'manager';
		$scope.flag1 = 'true';
		$scope.flag2 = '';
		$scope.queryDynamoDb =function(){
		awsService.queryTable(param, $window.localStorage.getItem(name), tableName, afterFetchingResults);
		};
		function afterFetchingResults(res){
			$timeout(function () {
				$scope.reportees = res.Items;
				$scope.flag1 = '';
				$scope.flag2 = 'true';
				}, 0);
		};
  });
