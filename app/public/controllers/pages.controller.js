app.controller('PagesController', function ($scope, NavigationService, $http, API_URL) {
	
	$scope.navMenu = NavigationService.getNavigation();
});