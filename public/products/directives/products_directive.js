angular.module('ProductsDirective', ['firebase', 'ui.router'])

.directive('productLineItems', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    }, 
    templateUrl: 'products/templates/product-line-items.html'
	}; 
})

;