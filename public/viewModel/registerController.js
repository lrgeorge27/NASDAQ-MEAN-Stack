/* global angular */ 
angular.module('nasdaqApp').controller('RegisterController', RegisterController);

function RegisterController($http){
    var vm = this;
    
    vm.register = function(){
        console.log("click");
        var user = {
            username: vm.username,
            password: vm.password,
            name: vm.name
        };
        
        if(!vm.username || !vm.password){
            vm.error = "Please add a username and password.";
        } else{
            if(vm.password !== vm.passwordRepeat) {
                vm.error = "Password and Repeat Password do not match.";
            } else {
                $http.post('/user/register', user).then(function(result){
                    console.log(result);
                    vm.message = "Registration successful! Please login.";
                    vm.error = "";
                }).catch(function(error){
                    console.log(error);
                });
            }
        }
    };
}
