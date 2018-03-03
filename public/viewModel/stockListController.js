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
        console.log(vm.Symbol);
        var symbol = vm.Symbol;
      	stockDataFactory.stocksGetSymbol(symbol).then(function(response) { //links to db array
		console.log(response); //return object
		vm.symbol = response.data;
    }).catch(function(error){
    	if (error){
    		console.log(error);
    		vm.error = "No stocks match symbol: " + symbol;
    	}
    });
};

}   
