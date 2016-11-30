angular.module('OrdersDirective', ['firebase', 'ui.router'])

.directive('orderLineItems', function() { 

	function controller($scope, ModalService){

		$scope.showOrderModal = function(order) {
			console.log(order.price);
	        ModalService.showModal({
	            templateUrl: 'orders/templates/order-open-modal.html',
	            controller: "OrderOpenModalController",
	            inputs: {
	            	dataset: order
	            }
	        }).then(function(modal) {
	            modal.element.modal();
	        });
	    }; 

	}

	return { 
		restrict: 'E', 
		scope: { 
		  dataset: '=' 
		}, 
		controller: controller,
		templateUrl: 'orders/templates/order-line-items.html'
		}; 
})

;