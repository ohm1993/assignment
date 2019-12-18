angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		// .when('/', {
		// 	templateUrl: 'views/home.html',
		// 	controller: 'MainController'
		// })
		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/addInventory',{
			templateUrl: 'views/addinventory.html',
			controller: 'InventoryController'
		})

		.when('/listInventory',{
            templateUrl: 'views/listinventory.html',
			controller: 'ListController'
		});

	$locationProvider.html5Mode(true);

}]);