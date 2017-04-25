var app = angular.module('angulardemo', ['ngRoute', 'ngCookies'])
		.constant('API_URL', 'http://localhost:8001/api')
		.config(function ($routeProvider, $locationProvider) {

			$routeProvider
			.when('/', {

				templateUrl : "view/home.html",
				controller : 'PagesController'
			})
			.when('/home', {

				templateUrl : "view/home.html",
				controller : 'PagesController'
			})
			.when('/about', {

				templateUrl : "view/about.html",
				controller : 'PagesController'
			})
			.when('/team', {

				templateUrl : "view/team.html",
				controller : 'PagesController'
			})
			.when('/work', {

				templateUrl : "view/work.html",
				controller : 'PagesController'
			})
			.when('/price', {

				templateUrl : "view/price.html",
				controller : 'PagesController'
			})
			.when('/contact', {

				templateUrl : "view/contact.html",
				controller : 'PagesController'
			})
	        .when('/register', {

	            controller: 'AuthController',
	            templateUrl: 'view/auth/register.html',
	        })
	        .when('/login', {

	            controller: 'AuthController',
	            templateUrl: 'view/auth/login.html',
	        })
	        .when('/logout', {
	        	// templateUrl: " ",
	            resolve : {
	            	redirect: function ($routeParams, $location){

						sessionStorage.removeItem('auth');
						$location.path('/login').replace();
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