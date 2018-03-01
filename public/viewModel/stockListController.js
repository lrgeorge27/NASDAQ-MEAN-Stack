/* global angular */ 
angular.module('nasdaqApp').controller('StocksController', StocksController);


function StocksController(stockDataFactory) {
	var vm = this;
	vm.title = 'NASDAQ Stocks';
	stockDataFactory.stockList().then(function(response) { //links to db array
		console.log(response); //return object
		vm.stocks = response.data;
	});
	
	vm.submitHandler = function() {
        console.log("submit");
        // var symbol = vm.stock.Symbol;
        console.log(vm.Symbol);
        // console.log(symbol);
    };
}

    
