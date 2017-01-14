angular.module('OrdersController', ['firebase', 'ui.router', 'angularModalService'])

.controller('OrderListCtrl', function($scope, OrderList, Headers, ModalService){
	$scope.orders = OrderList;
	$scope.header = Headers.orderHeaders;

})

.controller('OrderOpenModalController', function($scope, close, order) {

	$scope.order = order;

	console.log('orderObject', order);

	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};

})

;


	// $scope.showOrderModal = function() {
	// 	console.log('testorderOpen');
 //        ModalService.showModal({
 //            templateUrl: 'orders/templates/order-open-modal.html',
 //            controller: "OrderOpenModalController"
 //        }).then(function(modal) {
 //            modal.element.modal();
 //            modal.close.then(function(result) {
 //                $scope.message = "You said " + result;
 //            });
 //        });
 //    }; 