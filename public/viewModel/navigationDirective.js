/* global angular */ 
angular.module('nasdaqApp').directive('naNavigation', naNavigation);

function naNavigation(){
    return{
        restrict: 'E',
        templateUrl: 'viewModel/navigation.html'
    };
}
