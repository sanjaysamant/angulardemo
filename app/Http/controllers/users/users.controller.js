app.controller('UsersController', function ( $scope, $filter, $route, $routeParams, UserService, NavigationService, $http, $location, API_URL){

	$scope.navMenu = NavigationService.getNavigation();
	$scope.page_type = "add";

	/**
	 * Get user info data
	 */
	$scope.getPageType = function (){
	
		$http.get(API_URL + '/api/users/' + $routeParams.id + '/' + $route.current.$$route.pageTitle).success(function (response){
			
			if(response){

				$scope.data = response;
				// $scope.data.d_o_b = new Date(response.d_o_b)//$filter('date')(response.d_o_b, "dd/MM/yyyy");  // for type="date" binding
			}
		})
	}
	
	/**
	 * Get users with type
	 */
    $scope.getDevelopers = function () {
        
        $http.get(API_URL + '/api/users/developer').success(function (response){

			$scope.developers = response;
            // console.log(response);
        });
    }
	/**
	 * Get user detail by id
	 */
    $scope.getUserDetails = function () {
        
        $http.get(API_URL + '/api/user/show/' + $routeParams.id).success(function (response){

			$scope.user = response;
            // console.log(response);
        });
    }

	
	/**
	 * store personal info
	 */
	$scope.storePersonal = function () {

		var data = {};
		data['personal_details'] = ($scope.formData !== 'undefined' || $scope.formData !== null) ? $scope.formData : $scope.data;
		$http.put(API_URL + "/api/users/personal/" + $routeParams.id, data). success(function (response){
			// console.log("true" + response);
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
		data['edu_details'] = ($scope.formData !== 'undefined' || $scope.formData !== null) ? $scope.formData : $scope.data;
		$http.put(API_URL + "/api/users/edu/" + $routeParams.id, data). success(function (response){
			// console.log("true" + response);
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
		data['contact_details'] = ($scope.formData !== 'undefined' || $scope.formData !== null) ? $scope.formData : $scope.data;
		$http.put(API_URL + "/api/users/contact/" + $routeParams.id, data). success(function (response){
			
			if(response == "OK"){

				var user = JSON.parse(localStorage.getItem('auth'));
				console.log(user.user_type)
				if(user.user_type === "developer"){

					$location.path("/users_other/" + $routeParams.id);
				}
				else{

					$location.path("/home");
				}

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
	$scope.storeOther = function () {
		var data = {};
		data['other_details'] = ($scope.formData !== 'undefined' || $scope.formData !== null) ? $scope.formData : $scope.data;

		$http.put(API_URL + "/api/users/other/" + $routeParams.id, data).success(function (response){
			
			if(response == "OK"){

				var user = JSON.parse(localStorage.getItem('auth'));;

				if(user.user_type === "developer")
					$location.path("/dashboard");
				else
					$location.path("/home").replace();

			}
			else{

				$scope.resp = {"message" : response};
				$location.path("/users_other/" + $routeParams.id);
			}
		});
	}

});