app.controller('PersonalController', function ( $scope, AuthService, NavigationService, $http, $location, API_URL){

	$scope.navMenu = NavigationService.getNavigation();
	$scope.message = "";

	$scope.store = function () {
		console.log($scope.formData);
		// $http.post(API_URL + "/api/users/details/personal/store", JSON.stringify($scope.formData)).success ( function (response) {

		// 	if(response === "OK"){

		// 		$scope.resp = {"message" : "User profile created."};
		// 		$location.path('/users/details/contact').replace();
		// 	}else{

		// 		$scope.resp = {"message" : response};
		// 		$location.path('/users/details/personal').replace();

		// 	}
		// });
	}

});