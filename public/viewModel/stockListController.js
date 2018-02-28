/* global angular */ 
angular.module('nasdaqApp').controller('StocksController', StocksController);


function StocksController($http) {
	var vm = this;
	vm.title = 'NASDAQ Stocks';
	$http.get('/stocks').then(function(response) { //links to db array
		console.log(response); //return object
		vm.stocks = response.data;
	});
}