angular.module('ProductsController', ['firebase', 'ui.router', 'FirebaseFactories'])

.controller('ProductListCtrl', function($scope, ProductList, Headers, ProductsFirebase){
	$scope.products = ProductList;
	$scope.header = Headers.productHeaders;
	$scope.fbProducts = ProductsFirebase;

})

.controller('DeleteProductModalController', function($scope, close, product, ProductAPI, $firebaseArray) {

	$scope.product = product;

	console.log('productLine', product);

	$scope.deleteProduct = function(product) {
		console.log('test', product);

		ProductAPI.remove(product)
		.then(ref => console.log('product removed'))
		.catch(err => console.log(err));	
		}

	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};

})

;