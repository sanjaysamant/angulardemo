var app = angular.module('angulardemo', ['ngRoute', 'ngCookies'])
		.constant('API_URL', 'http://127.0.0.1:8001')
		.config(function ($routeProvider, $locationProvider, $httpProvider) {
			
			$httpProvider.defaults.headers.common = {'Content-Type' : 'application/json'};
			$httpProvider.defaults.headers.post = {};
			$httpProvider.defaults.headers.put = {};
			$httpProvider.defaults.headers.patch = {};

			/**
			 * 
			 * Checks for url access
			 */
			resolver = function (access){

				return {
					load: function($q, AuthService, $location){
						if(access){

							return true
						}else{

							if(AuthService.checkLogin()){

								return true;
							}
							else{

								$location.path("/login");
							}
						}
					}
				}
				
			}

			$routeProvider
			.when('/', {

				templateUrl : "/view/home.html",
				controller : 'PagesController'
			})
			.when('/home', {

				templateUrl : "/view/home.html",
				controller : 'PagesController'
			})
			.when('/about', {

				templateUrl : "/view/about.html",
				controller : 'PagesController'
			})
			.when('/team', {

				templateUrl : "/view/team.html",
				controller : 'PagesController'
			})
			.when('/work', {

				templateUrl : "/view/work.html",
				controller : 'PagesController'
			})
			.when('/price', {

				templateUrl : "/view/price.html",
				controller : 'PagesController'
			})
			.when('/contact', {

				templateUrl : "/view/contact.html",
				controller : 'PagesController'
			})
	        .when('/register', {

	            controller: 'AuthController',
	            templateUrl: '/view/auth/register.html',
				resolve:{

					loggedIn: function(AuthService, $location){
						
						if(!AuthService.checkLogin())
							return true;
						else
							$location.path("/home");
					}
				}

	        })
	        .when('/login', {

	            controller: 'AuthController',
	            templateUrl: '/view/auth/login.html',
				resolve:{

					loggedIn: function(AuthService, $location){
						
						if(!AuthService.checkLogin())
							return true;
						else
							$location.path("/home");
					}
				}

	        })
			.when('/users_personal/:id', {

	            controller: 'UsersController',
	            templateUrl: '/view/users/personal.html',
				pageTitle: personal_details,
				resolve:resolver(false)
			})
			.when('/users_edu/:id', {

	            controller: 'UsersController',
	            templateUrl: '/view/users/edu.html',
				pageTitle: 'edu_details',
				resolve:resolver(false)
			})
			.when('/users_contact/:id', {

	            controller: 'UsersController',
	            templateUrl: '/view/users/contact.html',
				pageTitle: 'contact_details',
				resolve:resolver(false)
			})
			.when('/other/:id', {

	            controller: 'UsersController',
	            templateUrl: '/view/users/other.html',
				pageTitle: 'other',
				resolve:resolver(false)
			})
	        .when('/logout', {
				
				resolve : {
	            	logout: function ($routeParams, $location, $http, API_URL){
						$http.get(API_URL + "/api/auth/logout").success(function (response) {

							if(response === "OK"){
								
								localStorage.removeItem('auth');
								$location.path('/login').replace();
							}
						})
 	            	}
	            }
	        })
			.otherwise({
            	redirectTo: '/',
    		}); 
    		$locationProvider.html5Mode({
			 	enabled: true,
			  	requireBase: false
			});
		}).run(['$http', '$cookies', function($http, $cookies) {

			$http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
		}]);