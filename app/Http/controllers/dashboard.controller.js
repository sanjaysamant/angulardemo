app.controller('DashboardController', function ( $scope, AuthService, NavigationService, $http, $location, API_URL){
	$scope.navMenu = NavigationService.getNavigation();

});