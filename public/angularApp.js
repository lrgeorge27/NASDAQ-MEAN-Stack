/* global angular StocksController SingleController RegisterController LoginController*/
// Lecture 47 - custom directive
angular.module('nasdaqApp', ['ngRoute', 'angularUtils.directives.dirPagination', 'angular-jwt']).config(config).run(run);

function config($routeProvider, $httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
	
	$routeProvider
	.when('/', {
		templateUrl: 'viewModel/stocks.html',
		controller: StocksController,
		controllerAs: 'vm',
		access: {
			restricted: false
		}
	})
	.when('/stock/:id', {
		templateUrl: 'viewModel/stock.html',
		controller: SingleController,
		controllerAs: 'vm', 
		access: {
			restricted: false
		}
	})
	.when('/search', {
		templateUrl: 'viewModel/search.html',
		controller: StocksController,
		controllerAs: 'vm',
		access: {
			restricted: false
		}
	})
		.when('/register', {
		templateUrl: 'viewModel/register.html',
		controller: RegisterController,
		controllerAs: 'vm', 
		access: {
			restricted: false
		}
	})
		.when('/profile', {
		templateUrl: 'viewModel/profile.html',
		controller: LoginController,
		controllerAs: 'vm',
		access: {
			restricted: true
		}
	})
	.otherwise({
		redirectTo:'/'
	});
}

function run($rootScope, $location, $window, AuthFactory){
	$rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
		if(nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn){
			event.preventDefault();
			$location.path('/');
		}
	});
}



