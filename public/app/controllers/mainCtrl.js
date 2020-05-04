angular.module('mainController', ['authServices'])

.controller('mainCtrl', function(Auth, $timeout, $location) {
	var app = this;

	this.dologin = function(loginData) {
		app.errorMsg = false;
		app.loading = true;
		//console.log('form submitted');
		//console.log(this.regData);
		Auth.login(app.loginData).then(function(data) {
			if (data.data.success) {
				app.loading = false;
				app.successMsg = data.data.message + '...Redirecting';
				$timeout(function() {
					$location.path('/about');
				}, 2000);
			} else {
				app.loading = false;
				app.errorMsg = data.data.message;
			}
		});
	};
});



