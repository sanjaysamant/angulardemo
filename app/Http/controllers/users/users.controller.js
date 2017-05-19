app.controller('UsersController', function ( $scope, $route, $routeParams, UserService, NavigationService, $http, $location, API_URL){

	$scope.navMenu = NavigationService.getNavigation();

	$scope.page_type = UserService.getPageType($routeParams.id, $route.current.$$route.pageTitle);
	

	/**
	 * store personal info
	 */
	$scope.storePersonal = function () {

		var data = {};
		data['personal_details'] = $scope.formData
		$http.put(API_URL + "/api/users/personal/" + $routeParams.id, data). success(function (response){
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
	 * store educational info
	 */
	$scope.storeEdu = function () {

		var data = {};
		data['edu_details'] = $scope.formData

		$http.put(API_URL + "/api/users/edu/" + $routeParams.id, data). success(function (response){
			console.log("true" + response);
			if(response == "OK"){

				$location.path("/users_contact/" + $routeParams.id)
			}
			else{

				$scope.resp = {"message" : response};
				$location.path('/users_personal/' + $routeParams.id).replace();
			}
		});
	}
	/**
	 * Store Contact info
	 */
	$scope.storeContact = function () {

		var data = {};
		data['contact_details'] = $scope.formData
		console.log(data)
		$http.put(API_URL + "/api/users/contact/" + $routeParams.id, $scope.formData). success(function (response){
			console.log("true" + response);
			if(response == "OK"){

				var user = localStorage.getItem('auth');

				if(user.user_type === "developer")
					$location.path("/other/" + $routeParams.id);
				else
					$location.path("/home");

			}
			else{

				$scope.resp = {"message" : response};
				$location.path('/users_contact/' + $routeParams.id).replace();
			}
		});
	}
/**
 * Other Details
 */
	$scope.storeOthers = function () {

		$http.put(API_URL + "/api/users/others/" + $routeParams.id, JSON.stringify($scope.formData), function (response){
			
			console.log(response);
		});
	}

});