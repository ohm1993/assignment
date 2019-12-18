var app =  angular.module('InventoryListCtrl', []);
app.controller('ListController', function($scope,$uibModal,$window,InventoryService) {
      InventoryService.getInventoryList()
        .then(function(inventories) {
            $scope.inventories = inventories;
            console.log("inventories are ",inventories);
        },
        function(data) {
            alert('inventories retrieval failed.')
        });
        $scope.edit = function(Id){
          var modalInstance =  $uibModal.open({
            templateUrl: "../../views/modelContent.html",
            controller: "ModalContentCtrl",
            size: '',
            resolve: {
              editId: function () {
                return Id;
              }
            }
          });
          
          modalInstance.result.then(function(response){
              $scope.result = `${response} button hitted`;
          });
        }
        $scope.delete = function(Id){
          InventoryService.deleteInventoryById(Id)
            .then(function(inventory) {
              $window.location.reload();
            },
            function(data) {
                alert('inventory delete failed.')
            });
        }
})
app.controller('ModalContentCtrl', ['$scope', '$uibModalInstance', '$window','editId','InventoryService'
     , function ($scope, $uibModalInstance, $window, editId, InventoryService) {
      InventoryService.getInventoryById(editId)
      .then(function(inventory) {
          $scope.data = inventory;
          console.log("inventory is ",inventory);
      },
      function(data) {
          alert('inventory retrieval failed.')
      });
     
      $scope.update = function(Id){
        InventoryService.updateInventoryById(Id,$scope.data)
        .then(function(inventoy) {
          $uibModalInstance.close("Ok");
          $window.location.reload();
        },
        function(data) {
            alert('Not Updated properly.');
            $uibModalInstance.close("Ok");
        });    
      }
   
      $scope.cancel = function(){
        $uibModalInstance.dismiss();
      } 
}]);
