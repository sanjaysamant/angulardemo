app.controller('AuthController', function ( $scope, AuthService, NavigationService, $http, $location, API_URL){

	$scope.navMenu = NavigationService.getNavigation();

	/**
	 * [register a new user]
	 * @return {[boolean]} [user create true or false]
	 */
	$scope.register = function () {

		$http.post(API_URL + "/register", $scope.file).success(function (response) {

			$scope.resp = AuthService.register($scope.file);
			console.log($scope.resp);
    		FlashFactory.setMessage($scope.resp.message);
			if($scope.resp.success)
				$location.path('/login').replace();
			else
				$location.path('/register').replace();
		});

	}

	/**
	 * [login description]
	 * @return {[type]} [description]
	 */ 
	$scope.login = function () {

		$http.post(API_URL + "/login", $scope.file).success(function (response) {

			$scope.resp = AuthService.login($scope.file);
			console.log($scope.resp);
			if($scope.resp.success)
				$location.path('/').replace();
			else
				$location.path('/login').replace();
		});
	}

	/**
	 * [logout description]
	 * @return {[type]} [description]
	 */
	$scope.logout = function () {

		$http.get(API_URL + "/logout").success(function (response) {
			console.log("logout");
			$scope.resp = AuthService.logout();
			console.log($scope.resp);
    		FlashFactory.setMessage($scope.resp.message);
			$location.path('/login').replace();
		});
	}
	/**
	 * [checkLogin description]
	 * @return {[type]} [description]
	 */
	$scope.checkLogin = function () {
		
		$scope.resp = AuthService.checkLogin();
		console.log($scope.resp);
		FlashFactory.setMessage($scope.resp.message);
	}

});
