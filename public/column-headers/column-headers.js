angular.module('ColumnHeaderDirective', ['firebase', 'ui.router'])

.directive('columnHeaders', function() { 
  return { 
    restrict: 'EA', 
    scope: { 
      dataset: '=' 
    }, 
    templateUrl: "column-headers/column-headers.html"
	}; 
})

;