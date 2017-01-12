angular.module('ContactsDirective', ['firebase', 'ui.router'])

.directive('contactLineItems', function() { 

	function controller($scope, ModalService, ContactAPI, $firebaseArray) {
		$scope.deleteContact = function(contact) {
			console.log('test', contact)

		ContactAPI.remove(contact)
		.then(ref => console.log('contact removed'))
		.catch(err => console.log(err));	
		}
	}

  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    },
    controller: controller, 
    templateUrl: 'contacts/templates/contact-line-items.html'
	}; 
})

;