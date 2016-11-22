angular.module('ProductsController', ['firebase', 'ui.router'])

.controller('ProductListCtrl', function($scope, ProductList, Headers){
	$scope.products = ProductList;
	$scope.header = Headers.productHeaders;

})

;