app.factory('RegisterFactory', function () {
	
	var factory = {};
	/**
	 * [Create a new user]
	 * @param  {[array of json object]} users [description]
	 * @param  {[json object]} user  [description]
	 * @return {[array]}       [new users array]
	 */
	factory.create = function (users, user){

		var data = users !== null ? users : [];
		data.push(user);//add a new user

		return data;
	}

	return factory;
});

