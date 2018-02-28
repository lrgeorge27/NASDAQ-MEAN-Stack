/* global angular */ 
angular.module('nasdaqApp').controller('SearchController', SearchController);

function SearchController($routeParams, stockDataFactory){
    var vm = this;
    var symbol = $routeParams.symbol;
    stockDataFactory.searchSymbol(symbol).then(function(response){
        console.log(response);
        vm.stock = response;
    });

// vm.addHistory = function(){
//     console.log("add to history");
//     var postData = {
//         name: vm.stock.Name,
//         symbol: vm.stock.Symbol
//     };
//     if(vm.search.$valid){
//         stockDataFactory.postHistory(symbol, postData).then(function(response){
//             console.log("added to history");
            // if(response.status === 200){
            //     $route.reload();
            // }
//         }).catch(function(error){
//             console.log(error);
//         });
//     } else {
//         vm.isSubmitted = true;
//     }
//     };
}
