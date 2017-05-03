app.controller('AuthController', function ( $scope, AuthService, NavigationService, $http, $location, API_URL){

	$scope.navMenu = NavigationService.getNavigation();

	/**
	 * [register a new user]
	 * @return {[boolean]} [user create true or false]
	 */
	$scope.register = function () {

		$http.post("http://127.0.0.1:8001/api/register", JSON.stringify($scope.file)).success(function (response) {
			// alert("jhe");
			// $scope.resp = AuthService.register($scope.file);
			// console.log($scope.resp);
			// if($scope.resp.success)
			// 	$location.path('/login').replace();
			// else
			// 	$location.path('/register').replace();
		});

	}

	/**
	 * [login description]
	 * @return {[type]} [description]
	 */ 
	$scope.login = function () {

		$http.post("http://127.0.0.1:8001/api/login", JSON.stringify($scope.file)).success(function (response) {
			//console.log(response);
			// return;
			// $scope.resp = AuthService.login($scope.file);
			// console.log($scope.resp);
			// if($scope.resp.success)
			// 	$location.path('/').replace();
			// else
			// 	$location.path('/login').replace();
		})
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
