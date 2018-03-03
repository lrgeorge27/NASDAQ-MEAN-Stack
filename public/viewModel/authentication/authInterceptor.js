/* global angular */ //needed to intercept http request to attach jwt 
angular.module('nasdaqApp').factory('AuthInterceptor', AuthInterceptor);

function AuthInterceptor($window, $q, $location, AuthFactory){
    return{
        request: request,
        response: response,
        responseError: responseError
    };
    
    function request(config){
        config.headers = config.headers || {};
        if($window.sessionStorage.token){
            config.headers.Authorization = 'Bearer' + $window.sessionStorage.token;
        }
        return config;
    }
    
    function response(response){
        if(response.status === 200 && $window.sessionStorage.token && !AuthFactory.isLoggedIn) {
            AuthFactory.isLoggenIn = true;
        }
        if(response.status === 401){
            AuthFactory.isLoggenIn = false;
        }
        return response || $q.when(response);
    }
    
    function responseError(rejection){
         if(rejection.status === 401 || rejection.status === 403){
             delete $window.sessionStorage.token;
             AuthFactory.isLoggenIn = false;
             $location.path('/');
         }
         return $q.reject(rejection);
    }
}