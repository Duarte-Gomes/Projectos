'use strict';

/**
 * @ngdoc function
 * @name dieta31diasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dieta31diasApp
 */
angular.module('dieta31diasApp')
  	.controller('MainCtrl', function (ServerService, $scope, $routeParams) {
    	
    	var idDia = $routeParams.id;

    	$scope.diasList = ServerService.getDiasList();

    	$scope.getDiaDetails = getDiaDetails;


    	function getDiaDetails() {
    		for (var i=0, len = $scope.diasList.length; i < len; i++) {
				if ($scope.diasList[i].id === parseInt(idDia)) {
					$scope.diaDetails = $scope.diasList[i];
					break;
				}
			}
    	}

    	getDiaDetails();
    });