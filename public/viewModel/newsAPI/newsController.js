/* global angular APIKEY */ 
angular.module('nasdaqApp').controller('NewsController', NewsController);
// var APIKEY = require('key.js');


function NewsController($http) {
	var vm = this;
	vm.title = 'The Latest Business News';
    $http.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" + APIKEY).then(function(response){
        console.log(response.data.articles);
        vm.articles = response.data.articles;
    });
}
