/* global angular */ 
angular.module('nasdaqApp').controller('SearchController', SearchController);

function SearchController($routeParams, stockDataFactory){
    var vm = this;
    var symbol = $routeParams.symbol;
    stockDataFactory.searchSymbol(symbol).then(function(response){
        console.log(response.data);
        vm.stock = response.data;
    });
}