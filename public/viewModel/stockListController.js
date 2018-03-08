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
		var saveStock = response.data;
		    if (response.data){
		        //make ajax call once search is successful to save
		        console.log("saved");
    	        stockDataFactory.addSearch({symbol: symbol}).then(function(response){
    	        console.log(response);
    	        }).catch(function(error){
    	            console.log(error);
    	        }
    	       );
      	    } else if(vm.isLoggedIn === true){
        	        //save stock to user model
                    console.log("saved to profile");
    	            stockDataFactory.saveToUser(saveStock).then(function(response){
    	                console.log(response);
    	            }).catch(function(error){
    	                console.log(error);
    	            });
    	        }
    }).catch(function(error){
    	if (error){
    		console.log(error);
    		vm.error = "No stocks match symbol: " + symbol;
    	}
    	}
    );
};

    vm.showHistory = function(){
        console.log("history");
        stockDataFactory.searchGetAll().then(function(response){
            console.log(response.data);
            vm.searchHistory = response.data;
        }).catch(function(error){
            if(error){
                console.log(error);
                vm.err = "Unable to retrieve search history.";
            }
        });
    };

}   
