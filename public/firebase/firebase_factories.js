(function() {

 var config = {
    apiKey: "AIzaSyChr5X_3DHzmVYkNrdBSpqvDORHydaCApY",
    authDomain: "inventory-app1.firebaseapp.com",
    databaseURL: "https://inventory-app1.firebaseio.com",
    storageBucket: "inventory-app1.appspot.com",
    messagingSenderId: "627544312111"
};

firebase.initializeApp(config);

angular.module('FirebaseFactories', ['firebase', 'ui.router','angularModalService'])

.config(function($firebaseRefProvider) {
	$firebaseRefProvider.registerUrl({
		default:config.databaseURL,
		object: `${config.databaseURL}/angular/object`,
		nav: `${config.databaseURL}/angular/nav`,
		contacts: `${config.databaseURL}/angular/contacts`,
		products: `${config.databaseURL}/angular/products`
	});
})

.factory('NavFirebase', function($firebaseObject, $firebaseRef) {
	return $firebaseObject($firebaseRef.nav);
})

.factory('ProductsFirebase', function($firebaseArray, $firebaseRef) {
	return $firebaseArray($firebaseRef.products);
})

.factory('ContactsFirebase', function($firebaseArray, $firebaseRef) {
	return $firebaseArray($firebaseRef.contacts);
})

// API Calls

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

;

}());