angular.module('NerdCtrl', []).controller('NerdController', function($scope,UserService) {
	console.log("in nerd controller loged in user is",UserService.IsAuthenticated());
	var logedinuser = UserService.IsAuthenticated();
	if(logedinuser){
		//$scope.$apply(function() {
			$scope.show = false;
			$scope.logout = true;
		//});
	}else{
		//$scope.$apply(function() {
			$scope.show = true;
			$scope.logout = false;
		//});
	}
	
	$scope.logoutUser = function(){
		alert("logout called");
	}
});