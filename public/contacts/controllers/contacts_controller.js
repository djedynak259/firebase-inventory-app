angular.module('ContactsController', ['firebase', 'ui.router', 'FirebaseFactories'])

.controller('ContactListCtrl', function($scope, ContactList, Headers, ContactsFirebase){
	$scope.contacts = ContactList;
	$scope.header = Headers.contactHeaders;
	$scope.fbContacts = ContactsFirebase;
	
})

.controller('DeleteContactModalController', function($scope, close, contact, ContactAPI, $firebaseArray) {

	$scope.contact = contact;

	console.log('contactLine', contact);

	$scope.deleteContact = function(contact) {
		console.log('test', contact)

		ContactAPI.remove(contact)
		.then(ref => console.log('contact removed'))
		.catch(err => console.log(err));	
		}

	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};

})

;