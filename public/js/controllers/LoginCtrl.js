angular.module('Login', []).controller('LoginController', function($scope,$location,$rootScope,UserService) {
	console.log("in nerd controller loged in user is",UserService.IsAuthenticated());
		(function initController() {
			UserService.ClearCredentials();
			$scope.show = true;
		})();
         $scope.login = function(){
			UserService.authenticateUser($scope.user)
			.then(function(user) {
				if(user){
					UserService.SetCredentials(user);
					$rootScope.authenticated = true;
					$location.path('/addInventory');
					alert("loged in successfull",user);
				}else{
					alert("login failed username and password not matched");
				}
			},
			function(data) {
				alert("login failed username and password not matched");
			});
		 }
});