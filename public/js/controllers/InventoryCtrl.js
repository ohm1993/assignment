angular.module('InventoryCtrl', []).controller('InventoryController', function($scope,$window,InventoryService,UserService) {
    console.log("in home page current loged in user is",UserService.IsAuthenticated());
    var logedinuser = UserService.IsAuthenticated();
	if(logedinuser){
			$scope.show = false;
	}else{
			$scope.show = true;
    }
    $scope.addinventory = function (isValid){
        if (isValid) {
            var dataObj = {
				product_id : $scope.data.productId,
				product_name : $scope.data.productName,
                vendor_name : $scope.data.vendor,
                mrp : $scope.data.mrp, 
                batch_number : $scope.data.batchNum,
                batch_date : $scope.data.batchDate,
                quantity : $scope.data.quantity,
                status : $scope.data.status
             };	
            InventoryService.createInventory(dataObj)
                .then(function(inventory) {
                    alert("added successfully");
                    $window.location.reload();
                },
                function(data) {
                    console.log('albums retrieval failed.')
                });
        }
    }

});