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

})

.factory('ProductAPI', function($q, $firebaseArray, $firebaseRef, ProductsFirebase){
 	return {
 		save: save,
 		remove: remove
 	};

 	function save(product) {
 		var d = $q.defer();
		ProductsFirebase
		.$add(product)
		.then(d.resolve)
		.catch(d.reject);

		return d.promise;
 	}

 	function remove(product) {	
 		var d = $q.defer();
 		
 		ProductsFirebase
		.$loaded()
		.then(data => {
 			data.$remove(data.$getRecord(product.$id))
 			.then(d.resolve)
			.catch(d.reject);
 		});
 		
		return d.promise;
 	}

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

		if (productExists($scope.newProd)) {
			$scope.message = true;
			return;
		}

		ProductAPI.save($scope.newProd)
		.then(ref => console.log('contact saved'))
		.catch(err => console.log(err));
	};

	// $scope.productAdd = function (result) {
	// 	console.log('testbutton');
	// 	ProductList.push($scope.newProd);
	// 	$scope.newProd = {};
	// };

})

.factory('ContactAPI', function($q, $firebaseArray, $firebaseRef, ContactsFirebase){
 	return {
 		save: save,
 		remove: remove
 	};

 	function save(contact) {
 		var d = $q.defer();
		ContactsFirebase
		.$add(contact)
		.then(d.resolve)
		.catch(d.reject);

		return d.promise;
 	}

 	function remove(contact) {	
 		var d = $q.defer();

 		ContactsFirebase
		.$loaded()
		.then(data => {
 			data.$remove(data.$getRecord(contact.$id))
 			.then(d.resolve)
			.catch(d.reject);
 		});
 		
		return d.promise;
 	}

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

		if (contactExists($scope.newcontact)) {
			$scope.message = true;
			return;
		}

		ContactAPI.save($scope.newcontact)
		.then(ref => console.log('contact saved'))
		.catch(err => console.log(err));
	};
})
;