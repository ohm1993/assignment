angular.module('UserService', []).factory('UserService', ['$http','$q','$rootScope', function($http,$q,$rootScope) {
    var user;
    return { 
        authenticateUser: function(user){
                return $http.post('http://localhost:8080/user/authenticate',user)
                .then(
                    function(response){
                        console.log("response value is",response);
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while logging user is',errResponse);
                        return $q.reject(errResponse);
                    }
                );
        },
        SetCredentials: function(user){
            $rootScope.globals = {
                currentUser: {
                    username: user.username
                }
            };
        },
        ClearCredentials: function(){
            $rootScope.globals = {};
        },
        IsAuthenticated: function(){
            return $rootScope.globals;
        }
    };
}]);    
