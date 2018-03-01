/* global angular */ 
// DataFactory replaces $http.get() request in controller files, best practice for separation of concerns. 
// Easier to update multiple endpoints for controllers. 
angular.module('nasdaqApp').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http) {
    return{
        stockList: stockList,
        singleStock: singleStock, 
        stocksGetSymbol: stocksGetSymbol,
        postHistory: postHistory
    };
    
    function stockList(){
        return $http.get('/stocks/').then(complete).catch(failed);
    }
    
    function singleStock(id){
        return $http.get('/stock/' + id).then(complete).catch(failed);
    }
    
    function stocksGetSymbol(symbol){
        return $http.get('/search/' + symbol).then(complete).catch(failed);
    }
    
    function postHistory(symbol, postData){
        return $http.post('/search/' + symbol).then(complete).catch(failed);
    }
    
    function complete(response){
        return response;
    }
    
    function failed(error){
        console.log(error);
    }
}