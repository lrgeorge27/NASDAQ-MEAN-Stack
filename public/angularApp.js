/* global angular StocksController*/
angular.module('nasdaqApp', ['ngRoute', 'angularUtils.directives.dirPagination']).config(config).controller("StocksController", StocksController);

function config($routeProvider) {
	$routeProvider.when('/stocks', {
		templateUrl: 'viewModel/stocks.html',
		controller: StocksController,
		controllerAs: 'vm'
	});
}

function StocksController($http) {
	var vm = this;
	vm.title = 'NASDAQ Stocks';
	$http.get('/stocks').then(function(response) { //links to db array
		console.log(response); //return object
		vm.stocks = response.data;
	});
}

