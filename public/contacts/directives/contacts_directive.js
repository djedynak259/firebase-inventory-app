angular.module('ContactsDirective', ['firebase', 'ui.router'])

.directive('contactLineItems', function() { 

	function controller($scope, ModalService, ContactAPI, $firebaseArray) {
		$scope.deleteContact = function(contact) {
			console.log('test', contact)

		ContactAPI.remove(contact)
		.then(ref => console.log('contact removed'))
		.catch(err => console.log(err));	
		}

		$scope.showContactDeleteModal = function(contact) {
			console.log(contact);
	        ModalService.showModal({
	            templateUrl: 'contacts/templates/delete-contact-modal.html',
	            controller: "DeleteContactModalController",
	            inputs: {
	            	contact: contact
	            }
	        }).then(function(modal) {
	            modal.element.modal();
	        });
	    }; 

	}

	return { 
	    restrict: 'E', 
	    scope: { 
	      dataset: '<' 
	    },
	    controller: controller, 
	    templateUrl: 'contacts/templates/contact-line-items.html'
	}; 
})

;