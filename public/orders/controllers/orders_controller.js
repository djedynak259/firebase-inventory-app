angular.module('OrdersController', ['firebase', 'ui.router'])

.controller('OrderListCtrl', function($scope, OrderList, Headers){
	$scope.orders = OrderList;
	$scope.header = Headers.orderHeaders;
	// $scope.view = function(item) {
	// 	console.log(item);
	// }
})

;