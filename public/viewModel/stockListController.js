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
		    if (response.data){
		        console.log("saved");
    	        stockDataFactory.addSearch({symbol: symbol}).then(function(response){
    	        console.log(response);
    	        }).catch(function(error){
    	           // if(error){
    	            console.log(error);
    	       // }
    	        }
    	       );
      	    }
    }).catch(function(error){
    	if (error){
    		console.log(error);
    		vm.error = "No stocks match symbol: " + symbol;
    	}
            // $http.post('/search/', symbol).then(function(result){
            //         console.log(result);
            //         // vm.message = "Registration successful! Please login.";
            //         // vm.error = "";
            //     }).catch(function(error){
            //         console.log(error);
            //     });
    	}
    );
};
//make ajax call once search is successful to save
	// vm.save = function(){
 //       console.log("click");
 //       var user = {
 //           username: vm.username,
 //           password: vm.password,
 //           name: vm.name
 //       };
        
 //       if(!vm.username || !vm.password){
 //           vm.error = "Please add a username and password.";
 //       } else{
 //           if(vm.password !== vm.passwordRepeat) {
 //               vm.error = "Password and Repeat Password do not match.";
 //           } else {
 //               $http.post('/user/register', user).then(function(result){
 //                   console.log(result);
 //                   vm.message = "Registration successful! Please login.";
 //                   vm.error = "";
 //               }).catch(function(error){
 //                   console.log(error);
 //               });
 //           }
 //       }
 //   };


}   
