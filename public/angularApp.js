/* global angular StocksController SingleController*/
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
	});
}




