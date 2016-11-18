(function() {


 var config = {
    apiKey: "AIzaSyChr5X_3DHzmVYkNrdBSpqvDORHydaCApY",
    authDomain: "inventory-app1.firebaseapp.com",
    databaseURL: "https://inventory-app1.firebaseio.com",
    storageBucket: "inventory-app1.appspot.com",
    messagingSenderId: "627544312111"
};

firebase.initializeApp(config);


angular.module('InventoryApp', ['firebase'])

.controller('MyCtrl', function($scope, $firebaseObject){
	const rootRef = firebase.database().ref().child('angular');
	const ref = rootRef.child('object');
	$scope.object = $firebaseObject(ref);
})

;
}());