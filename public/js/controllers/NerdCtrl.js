angular.module('NerdCtrl', []).controller('NerdController', function($scope,UserService,$location,$rootScope) {	
	$scope.logoutUser = function(){
		UserService.ClearCredentials();
		$rootScope.authenticated = false;
		$location.path('/');
	}
});