app.controller('PagesController', function ($scope, NavigationService, $http, API_URL) {
	
	$scope.navMenu = NavigationService.getNavigation();

	/**
	 * 
	 */
	$scope.developers = function () {

		$http.get(API_URL + "/api/developers/"). success(function (response){


		});
	}

});