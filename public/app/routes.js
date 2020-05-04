angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	
	$routeProvider

	.when('/', {
		templateUrl: 'app/views/pages/home.html'
	})

	.when('/about', {
		templateUrl: 'app/views/pages/about.html'
	})

	.when('/register', {
		templateUrl: 'app/views/pages/users/register.html',
		controller: 'regCtrl',
		controllerAs: 'register'
		//authenticated: false
	})

	.when('/login', {
		templateUrl: 'app/views/pages/users/login.html',
		//authenticated: false
	})

	.when('/political', {
		templateUrl: 'app/views/pages/users/political.html',
		//authenticated: false
	})

	.when('/political1', {
		templateUrl: 'app/views/pages/users/political1.html',
		//authenticated: false
	})

	.when('/business', {
		templateUrl: 'app/views/pages/users/business.html',
		//authenticated: false
	})

	.when('/business1', {
		templateUrl: 'app/views/pages/users/business1.html',
		//authenticated: false
	})

	.when('/sports', {
		templateUrl: 'app/views/pages/users/sports.html',
		//authenticated: false
	})

	.when('/sports1', {
		templateUrl: 'app/views/pages/users/sports1.html',
		//authenticated: false
	})

	.when('/awards', {
		templateUrl: 'app/views/pages/users/awards.html',
		//authenticated: false
	})

	.when('/awards1', {
		templateUrl: 'app/views/pages/users/awards1.html',
		//authenticated: false
	})

	.when('/health', {
		templateUrl: 'app/views/pages/users/health.html',
		//authenticated: false
	})

	.when('/health1', {
		templateUrl: 'app/views/pages/users/health1.html',
		//authenticated: false
	})

	.when('/science', {
		templateUrl: 'app/views/pages/users/science.html',
		//authenticated: false
	})

	.when('/science1', {
		templateUrl: 'app/views/pages/users/science1.html',
		//authenticated: false
	})

	.otherwise({ redirectTo: '/'});

	$locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});