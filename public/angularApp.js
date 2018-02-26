/* global angular StocksController*/ 
angular.module('nasdaqApp', ['ngRoute'])
.config(config)
.controller("StocksController", StocksController);

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'viewModel/stocks.html', 
            controller: StocksController,
            controllerAs: 'vm'
        });
}

function StocksControler(){
    var vm = this;
    vm.title = 'NASDAQ Stocks';
}