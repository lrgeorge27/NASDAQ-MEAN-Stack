/* global angular */ 
angular.module('nasdaqApp').controller('SingleController', SingleController);

function SingleController($http, $routeParams){
    var vm = this;
    var id = $routeParams.id;
    $http.get('/stock/' + id).then(function(response){
        console.log(response.data);
        vm.stock = response.data;
        
    });
}