app.controller('UsersController', function ( $scope, $routeParams, NavigationService, $http, $location, API_URL){

	$scope.navMenu = NavigationService.getNavigation();
	// console.log($routeParams.id)
	
	/**
	 * store personal info
	 */
	$scope.storePersonal = function () {

		$http.put(API_URL + "/api/users/personal/" + $routeParams.id, JSON.stringify($scope.formData), function (response){
			console.log("true" + response);
			if(response == "OK"){

				$location.path("/users_edu/" + $routeParams.id)
			}
			else{

				$scope.resp = {"message" : response};
				$location.path('/users_personal/' + $routeParams.id).replace();
			}
		});
	}

	/**
	 * store personal info
	 */
	$scope.storeEdu = function () {

		$http.put(API_URL + "/api/users/edu/" + $routeParams.id, JSON.stringify($scope.formData), function (response){
			
			if(response == "OK"){

				$location.path("/users_contact/" + $routeParams.id)
			}
			else{

				$scope.resp = {"message" : response};
				$location.path('/users_edu/' + $routeParams.id).replace();
			}
		});
	}
	$scope.storeContact = function () {

		$http.put(API_URL + "/api/users/contact/" + $routeParams.id, JSON.stringify($scope.formData), function (response){
			
			if(response == "OK"){

				$location.path("/users_edu/" + $routeParams.id)
			}
			else{

				$scope.resp = {"message" : response};
				$location.path('/users_personal/' + $routeParams.id).replace();
			}
		});
	}
	$scope.storeOthers = function () {

		$http.put(API_URL + "/api/users/others/" + $routeParams.id, JSON.stringify($scope.formData), function (response){
			
			console.log(response);
		});
	}

});