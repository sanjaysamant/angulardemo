app.service('UserService', function ($http, API_URL){

    var page_type = "";
	this.getPageType = function(id, pageTitle){
		console.log(pageTitle)
		return $http.get(API_URL + '/api/users/' + id, {'pageTitle' : pageTitle}).success(function (response){
			return(response);
			// if(response[pageTitle])
			// 	console.log( this.page_type = "edit");
			// else
			// 	return this.page_type = "add";
		})
        
	}

});
