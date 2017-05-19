app.service('UserService', function ($http, API_URL){

    $page_type = "";
	this.getPageType = function(id, pageTitle){
		
		return $http.get(API_URL + '/api/users/' + id).success(function (response){


            console.log(JSON.stringify(pageTitle))
			// if(response.pageTitle)
			// 	return $page_type = "edit";
			// else
			// 	return $page_type = "add";
		})
        
	}

});
