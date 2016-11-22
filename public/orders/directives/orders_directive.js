angular.module('OrdersDirective', ['firebase', 'ui.router'])

.directive('orderLineItems', function() { 

	function controller($scope ) {
			$scope.view = function(item) {
			console.log(item);
		};
	}

  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=',
      view: '&' 
    }, 
    controller: controller,
    templateUrl: 'orders/templates/order-line-items.html'
	}; 
})

;