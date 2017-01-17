angular.module('NavController', ['firebase', 'ui.router','angularModalService', 'FirebaseFactories'])

.controller('NavCtrl', function ($scope, ProductList, ContactList, NavFirebase, ModalService) {

	$scope.nav = NavFirebase;

	$scope.showProductAdd = function() {
        ModalService.showModal({
            templateUrl: 'nav/templates/add-product-modal.html',
            controller: "ProductAddModalController"
        }).then(function(modal) {
            modal.element.modal();
            // modal.close.then(function(result) {
            //     $scope.message = "You said " + result;
            // });
        });
    };

	$scope.showContactAdd = function() {
        ModalService.showModal({
            templateUrl: 'nav/templates/add-contact-modal.html',
            controller: "ContactAddModalController"
        }).then(function(modal) {
            modal.element.modal();
        });
    };

    $scope.showProductMerge = function() {
        ModalService.showModal({
            templateUrl: 'nav/templates/product-merge-modal.html',
            controller: "ProductMergeModalController"
        }).then(function(modal) {
            modal.element.modal();
        });
    };     

})

.controller('ProductAddModalController', function($scope, close, ProductAPI, ProductsFirebase) {
  
	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};

	function productExists(product) {
		return _.some(ProductsFirebase, { name: product.name });	
	}

	$scope.productAdd = function() {
		$scope.message = false;
		$scope.saved = false;

		if (productExists($scope.newProd)) {
			$scope.message = true;
			return;
		}

		ProductAPI.save($scope.newProd)
		.then(ref => $scope.saved = true)
		.catch(err => console.log(err));
	};

	// $scope.productAdd = function (result) {
	// 	console.log('testbutton');
	// 	ProductList.push($scope.newProd);
	// 	$scope.newProd = {};
	// };

})

.controller('ProductMergeModalController', function($scope, close, ProductAPI, ProductsFirebase) {
  	$scope.products = ProductsFirebase;

	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};

	function productExists(product) {
		return _.some(ProductsFirebase, { name: product.name });	
	}

	$scope.productMerge = function() {

		$scope.exists = false;
		$scope.merged = false;
		$scope.selectAttribues = false;
		$scope.selectProducts = false;

		console.log($scope.mergedProduct);
		console.log($scope.option1);

		if($scope.option1 === undefined 
			|| $scope.option2 === undefined){
			$scope.selectProducts = true;
			return;
		}		

		if($scope.mergedProduct === undefined 
			|| $scope.mergedProduct.mergeImg === undefined
			|| $scope.mergedProduct.mergeName === undefined
			|| $scope.mergedProduct.mergePrice === undefined){
			$scope.selectAttribues = true;
			return;
		}

		if (productExists($scope.mergedProduct)) {
			$scope.exists = true;
			return;
		}


		function mergeAPI () {
			var product1 = $scope.option1.selectedOption;
	  		var product2 = $scope.option2.selectedOption;
	  		var mergedProduct = {}

			ProductAPI.remove(product1)
			.then(ref => console.log(product1.name + 'removed'))
			.catch(err => console.log(err));	

			ProductAPI.remove(product2)
			.then(ref => console.log(product1.name+ 'removed'))
			.catch(err => console.log(err));	
			
			ProductAPI.save($scope.mergedProduct)
			.then(ref => $scope.merged = true)
			.catch(err => console.log(err));
		}

		mergeAPI();
	};

})

.controller('ContactAddModalController', function($scope, close, ContactAPI, ContactsFirebase) {
  	

	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};

	function contactExists(contact) {
		return _.some(ContactsFirebase, { name: contact.name });	
	}

	// function contactExists(contact) {
	// 	var exists = false;

	// 	ContactsFirebase.forEach(c => {
	// 		if (c.name === contact.name) {
	// 			exists = true;
	// 		}
	// 	});

	// 	return exists;
	// };

	$scope.contactAdd = function() {
		$scope.message = false;
		$scope.saved = false;

		if (contactExists($scope.newcontact)) {
			$scope.message = true;
			return;
		}

		ContactAPI.save($scope.newcontact)
		.then(ref => $scope.saved = true)
		.catch(err => console.log(err));
	};
})
;