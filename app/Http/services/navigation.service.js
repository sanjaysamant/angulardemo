app.service('NavigationService', function (AuthService, $location) {
	/**
	 * 
	 * Get All the navigation
	 */
	this.getNavigation = function (){

		var navMenu = [{title : "ABOUT", url : '/about', show : true}, {title : "TEAM", url : '/team', show : true}, {title : "WORK", url : '/work', show : true}, {title : "PRICING", url : '/price', show : true}, {title : 'CONTACT', url : '/contact', show : true}, ];

		if(AuthService.checkLogin()){
			
			navMenu.push({title : 'LOGOUT', url : '/logout', show : AuthService.checkLogin()});
		}
		else{

			navMenu.push({title : 'LOGIN', url : '/login', show : !AuthService.checkLogin()}, {title : 'REGISTER', url : '/register', show : !AuthService.checkLogin()});
		}

		return navMenu;
	}

	/**
	 * 
	 * Get Navigation title
	 */
	this.getNavTitle = function (){
		
		var nav = [];
		angular.forEach(this.getNavigation(), function(navigations, key) {

			nav.push(navigations.title);
		});

		return nav;
	}

	/**
	 * 
	 * 
	 */
	this.matchNavigation = function (){

		var route = $location.url().replace('/','');
		if( this.getNavTitle().indexOf(route) === -1 ) return true;
		else return false;
	}
});
