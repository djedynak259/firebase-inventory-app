angular.module('NavController', ['firebase', 'ui.router'])

.controller('NavCtrl', function ($scope, ProductList, ContactList, NavFactory) {

	$scope.nav = NavFactory;

	$scope.productAdd = function () {
		console.log('test');
		ProductList.push($scope.newProd);
		$scope.newProd = {};
	};
	$scope.contactAdd = function() {
		console.log('test');
		ContactList.push($scope.newcontact);
		$scope.newcontact = {};
	
	};
})

.factory('NavFactory', function($firebaseObject, $firebaseRef) {
	return $firebaseObject($firebaseRef.nav);
})

;