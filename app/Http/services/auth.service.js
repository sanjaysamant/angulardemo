app.service('AuthService', function (RegisterFactory) {

	/**
	 * [create description]
	 * @param  {[type]} users [description]
	 * @param  {[type]} user  [description]
	 * @return {[type]}       [description]
	 */
	this.register = function (fileData) {

		var response = true;
		var message = "User created successfully.";
		// alert(fileData.email); return;
		if((typeof fileData.email !== "undefined") && (typeof fileData.username !== "undefined") && (typeof fileData.password !== "undefined") && (typeof fileData.c_password !== "undefined")){
			
			var formData = {}; // creating a new file object
			formData.email = fileData.email;
			formData.username = fileData.username;
			formData.password = fileData.password;
			
			if(fileData.password === fileData.c_password){


				angular.forEach(JSON.parse(localStorage.getItem('user')), function (value){

					var item = JSON.parse(value); 

					if(formData.email === item.email){

						response = false;
						message = "User already created.";
					}
				});
				if (response === true){ // if user already not exists

					var users = JSON.parse(localStorage.getItem('user')); // Get all users from local storage
					var user = JSON.stringify(formData); //Current new user
					var data = RegisterFactory.create(users, user);//add user
					localStorage.setItem('user', JSON.stringify(data));// store user to local storage

				}
			}
			else{

				response = false;
				message = "Password does not match. Please match the password.";
			}
		}else{

			response = false;
			message = "Please fill all the mandatory fields.";
		}

		return {'message': message, 'success' : response};
	}

	/**
	 * [login description]
	 * @param  {[type]} fileData [description]
	 * @return {[type]}          [description]
	 */
	this.login = function (fileData){

		var response = false;
		var message = "Invalid Username/Password.";

		if(	this.checkLogin() ){ // check if user is already authenticated 

			var response = false;
			var message = "User already logged in.";

		}else{

			// alert(fileData.email); return;
			if((typeof fileData.email !== "undefined")  && (typeof fileData.password !== "undefined")){
			
				angular.forEach(JSON.parse(localStorage.getItem('user')), function (value){

					var item = JSON.parse(value); 
					var data = [];
					if((fileData.email === item.email) && (fileData.password == item.password)){

						data.push({'username' : item.username, 'login' : true});
						sessionStorage.setItem('auth', JSON.stringify(data));// set user value in session storage
						response = true;
						message = "User Login successfully.";
					}
				});
			}else{

				response = false;
				message = "Please fill all the mandatory fields.";
			}
		}
		
		return {'message': message, 'success' : response};
	}

	/**
	 * [logout description]
	 * @return {[type]} [description]
	 */
	this.logout = function (){

		sessionStorage.removeItem('auth');

		return {'message': "Logded out", 'success' : true};
	}

	/**
	 * [checkLogin description]
	 * @return {[type]} [description]
	 */
	this.checkLogin = function () {

		var response = false;
		var auth = (JSON.parse(sessionStorage.getItem('auth')) !== null) ;

		if (auth)
			response = true;

		return response; 
	}
	
});