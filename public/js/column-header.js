angular.module('ColumnHeaderDirective', ['firebase', 'ui.router'])

.directive('columnHeaders', function() { 
  return { 
    restrict: 'EA', 
    scope: { 
      dataset: '=' 
    }, 
    templateUrl: "products/templates/column-headers.html"
	}; 
})

;