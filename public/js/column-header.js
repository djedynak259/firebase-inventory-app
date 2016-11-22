angular.module('ColumnHeaderDirective', ['firebase', 'ui.router'])

.directive('columnHeaders', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    }, 
    templateUrl: "products/templates/column-headers.html"
	}; 
})

;