angular.module('ContactsController', ['firebase', 'ui.router'])

.controller('ContactListCtrl', function($scope, ContactList, Headers){
	$scope.contacts = ContactList;
	$scope.header = Headers.contactHeaders;

})

;