angular.module('ContactsController', ['firebase', 'ui.router'])

.controller('ContactListCtrl', function($scope, ContactList, Headers, ContactFirebase){
	$scope.contacts = ContactList;
	$scope.header = Headers.contactHeaders;
	$scope.fbContacts = ContactFirebase;
	
})

;