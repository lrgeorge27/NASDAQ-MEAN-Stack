/* global angular */ 
// DataFactory replaces $http.get() request in controller files, best practice for separation of concerns. 
// Easier to update multiple endpoints for controllers. 
angular.module('nasdaqApp').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http) {
    return{
        stockList: stockList,
        singleStock: singleStock, 
        stocksGetSymbol: stocksGetSymbol,
        addSearch: addSearch,
        searchGetAll: searchGetAll, 
        saveToUser: saveToUser
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
    
    function addSearch(symbol){
        return $http.post('/search/', symbol).then(complete).catch(failed);
    }
    
    function searchGetAll(){
        return $http.get('/search/').then(complete).catch(failed);
    }
    
    function saveToUser(saveStock){
        return $http.post('/user/').then(complete).catch(failed);
    }

    
    function complete(response){
        return response;
    }
    
    function failed(error){
        console.log(error);
    }
}