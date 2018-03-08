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
    // vm.getNews = function(){
    //     console.log("click");
    // $(document).ready(function() {
    // $.ajax({
    //     method: "GET",
    //     url: "https://newsapi.org/v2/sources?",
    //     data: { category: "business", country: "us", language: "en", apiKey: APIKEY },
    //     success: function(data) {
    //         if (data.status == "ok") {
    //             console.log(data.sources);
    //             vm.news = data.sources;
                // for (var i = 0; i < data.sources.length; i++) { //did not do sources[] because we are running through entire array
                //     var source = document.createElement("OPTION");
                //     source.setAttribute("value", data.sources[i].id);
                //     source.innerHTML = data.sources[i].name;
                //     document.getElementById("selection").appendChild(source);
                //     console.log("display");

            //     }
            // }
        // });
    
    // $("#source").submit(function(event) {
    //     event.preventDefault();
    //     var value = document.getElementById("selection").value;
    //     $.ajax({
    //         method: "GET",
    //         url: "https://newsapi.org/v2/top-headlines",
    //         data: { country: "us", apiKey: APIKEY },
    //         success: function(data) {
    //             // console.log(data);
    //             // vm.articles = data;
    //             for (var i = 0; i < data.articles.length; i++) {
    //                 console.log("start");
    //                 console.log(data.articles[i]);
    //                 vm.articles = data.articles[i];
    //             }

    //     }
    // });

    
// });
}
