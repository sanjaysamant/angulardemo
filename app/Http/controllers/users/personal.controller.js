app.controller('PersonalController', function ( $scope, $routeParams, NavigationService, $http, $location, API_URL){

	$scope.navMenu = NavigationService.getNavigation();
	// console.log($routeParams.id)
	$scope.storePersonal = function () {

		$http.put(API_URL + "/api/users/personal/" + $routeParams.id, JSON.stringify($scope.formData), function (response){
			
			console.log(response);
		});
	}

});