angular.module('ContactsDirective', ['firebase', 'ui.router'])

.directive('contactLineItems', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    }, 
    templateUrl: 'contacts/templates/contact-line-items.html'
	}; 
})

;