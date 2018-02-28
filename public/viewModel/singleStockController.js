/* global angular */ 
angular.module('nasdaqApp').controller('SingleController', SingleController);

function SingleController($routeParams, stockDataFactory){
    var vm = this;
    var id = $routeParams.id;
    stockDataFactory.singleStock(id).then(function(response){
        console.log(response.data);
        vm.stock = response.data;
    });
}