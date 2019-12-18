angular.module('InventoryService', []).factory('InventoryService', ['$http','$q', function($http,$q) {
    return { 
        createInventory: function(inventory){
                return $http.post('http://localhost:8080/inventory/add', inventory)
                .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while creating user');
                        return $q.reject(errResponse);
                    }
                );
        }, 
        getInventoryList: function(){
            return $http.get('http://localhost:8080/inventory/inventorylist')
                .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        return $q.reject(errResponse);
                    }
            );
        },
        getInventoryById: function(Id){
            return $http.get(`http://localhost:8080/inventory/`+Id)
                .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        return $q.reject(errResponse);
                    }
            );
        },
        updateInventoryById: function(Id,data){
            return $http.put(`http://localhost:8080/inventory/update/`+Id,data)
            .then(
                function(response){
                    return response.data;
                }, 
                function(errResponse){
                    console.log("error response is",errResponse);
                    return $q.reject(errResponse);
                }
            );
        },
        deleteInventoryById: function(Id){
            return $http.delete(`http://localhost:8080/inventory/`+Id)
            .then(
                function(response){
                    return response.data;
                }, 
                function(errResponse){
                    console.log("error response is",errResponse);
                    return $q.reject(errResponse);
                }
            );
        }   
    };
}]);