app.controller('PersonalController', function ( $scope, $routeParams, NavigationService, $http, $location, API_URL){

	$scope.navMenu = NavigationService.getNavigation();
	var id = $routeParams.id;
	$scope.storePersonal = function () {

		console.log($scope.formData);
		$http.post(API_URL + "/api/users/personal", JSON.stringify($scope.formData), function (response){
			
			console.log(response);
		});
	}

});