var app = angular.module('angulardemo', ['ngRoute', 'ngCookies'])
		.constant('API_URL', 'http://127.0.0.1:8001')
		.config(function ($routeProvider, $locationProvider, $httpProvider) {
			
			$httpProvider.defaults.headers.common = {'Content-Type' : 'application/json'};
			$httpProvider.defaults.headers.post = {};
			$httpProvider.defaults.headers.put = {};
			$httpProvider.defaults.headers.patch = {};
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
	            templateUrl: 'view/auth/login.html',
				resolve:{

					loggedIn: function(AuthService, $location){
						
						if(!AuthService.checkLogin())
							return true;
						else
							$location.path("/home");
					}
				}

	        })
			.when('/users_personal', {

	            controller: 'PersonalController',
	            templateUrl: 'view/users/personal.html',
				resolve:{

					loggedIn: function(AuthService, $location){
						
						if(AuthService.checkLogin()){
							return true;
							// var $user_id = localStorage.getItem('auth').id;
							// var $id = $location.search().id;
							// if($id === $user_id){

							// 	return true;
							// }
							// else{

							// 	$location.path('/home');
							// }
						}
						else{

							$location.path("/login");
						}
					}
				}
	        })
	        .when('/users_edu/abc', {

	            controller: 'EduController',
	            templateUrl: '/view/users/edu.html',
				resolve:{
					loggedIn: function(AuthService, $location){
						
						if(AuthService.checkLogin())
							return true;
						else
							$location.path("/login");
					}
				}

	        })
	        .when('/users_contact', {

	            controller: 'ContactController',
	            templateUrl: 'view/users/contact.html',
	        })
	        .when('/users_other', {

	            controller: 'OthersController',
	            templateUrl: 'view/users/other.html',

	        })
	        .when('/logout', {
	        	// templateUrl: " ",
	            resolve : {
	            	redirect: function ($routeParams, $location){

						localStorage.removeItem('auth');
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