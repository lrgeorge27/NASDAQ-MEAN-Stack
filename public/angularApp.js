/* global angular StocksController SingleController*/
// Lecture 47 - custom directive
angular.module('nasdaqApp', ['ngRoute', 'angularUtils.directives.dirPagination']).config(config);

function config($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'viewModel/stocks.html',
		controller: StocksController,
		controllerAs: 'vm'
	})
	.when('/stock/:id', {
		templateUrl: 'viewModel/stock.html',
		controller: SingleController,
		controllerAs: 'vm'
	})
	.when('/search', {
		templateUrl: 'viewModel/search.html',
		controller: StocksController,
		controllerAs: 'vm'
	});
}




