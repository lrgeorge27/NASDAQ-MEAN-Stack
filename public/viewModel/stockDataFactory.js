/* global angular */ 
// DataFactory replaces $http.get() request in controller files, best practice for separation of concerns. 
// Easier to update multiple endpoints for controllers. 
angular.module('nasdaqApp').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http) {
    return{
        stockList: stockList,
        singleStock: singleStock, 
        searchSymbol: searchSymbol
    };
    
    function stockList(){
        return $http.get('/stocks/').then(complete).catch(failed);
    }
    
    function singleStock(id){
        return $http.get('/stock/' + id).then(complete).catch(failed);
    }
    
    function searchSymbol(symbol){
        return $http.get('/stocks/' + symbol).then(complete).catch(failed);
    }
    
    function complete(response){
        return response;
    }
    
    function failed(error){
        console.log(error.statusText);
    }
}