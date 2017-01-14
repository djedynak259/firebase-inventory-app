angular.module('ProductsDirective', ['firebase', 'ui.router', 'FirebaseFactories'])

.directive('productLineItems', function() { 
  
	function controller($scope, ModalService, ProductAPI, $firebaseArray) {
		$scope.deleteProduct = function(product) {
			console.log('productInfo', product)

		ProductAPI.remove(product)
		.then(ref => console.log('product removed'))
		.catch(err => console.log(err));	
		}

		$scope.showProductDeleteModal = function(product) {
			console.log(product);
	        ModalService.showModal({
	            templateUrl: 'products/templates/delete-product-modal.html',
	            controller: "DeleteProductModalController",
	            inputs: {
	            	product: product
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
	    templateUrl: 'products/templates/product-line-items.html'
	}; 
})

;