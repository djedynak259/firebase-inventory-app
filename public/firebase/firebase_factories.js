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

.factory('ContactsFirebase', function($firebaseArray, $firebaseRef) {
	return $firebaseArray($firebaseRef.contacts);
})

.factory('ProductsFirebase', function($firebaseArray, $firebaseRef) {
	return $firebaseArray($firebaseRef.products);
})

;

}());