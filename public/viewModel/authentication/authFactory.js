/* global angular */ 
angular.module('nasdaqApp').factory('AuthFactory', AuthFactory);

function AuthFactory(){
    return{
        auth: auth
    };
    
    var auth = {
        isLoggedIn: false
    };
}
