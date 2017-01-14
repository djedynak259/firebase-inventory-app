angular.module('ContactsController', ['firebase', 'ui.router', 'FirebaseFactories'])

.controller('ContactListCtrl', function($scope, ContactList, Headers, ContactsFirebase){
	$scope.contacts = ContactList;
	$scope.header = Headers.contactHeaders;
	$scope.fbContacts = ContactsFirebase;
	
})

;