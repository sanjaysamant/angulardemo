app.controller('NavigationController', function ( $scope, AuthService, NavigationService, $http, $location, API_URL){
	
    $scope.navMenu = NavigationService.getNavigation();
    $scope.navigation = NavigationService.getNavTitle();
    $scope.matchNav = NavigationService.matchNavigation();
});