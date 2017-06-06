app.controller('DashboardController', function ( $scope, AuthService, $http, $location, $window, API_URL){

	// $scope.user = {};
	/**
	 * Get user
	 */
    // $scope.getUserDetails = function () {

    //     $http.get(API_URL + '/api/user/show/' + AuthService.auth().id).success(function (response){

	// 		$scope.user = response;
    //     });
    // }
	
	// $scope.index = function (){

		$http.get('/dashboard').success( function (response) {

			if(AuthService.checkLogin())
				$window.location.href = API_URL + '/api/dashboard/';
			else
				$location.path('/login')	
		})
	// }

});