(function() {

 var config = {
    apiKey: "AIzaSyChr5X_3DHzmVYkNrdBSpqvDORHydaCApY",
    authDomain: "inventory-app1.firebaseapp.com",
    databaseURL: "https://inventory-app1.firebaseio.com",
    storageBucket: "inventory-app1.appspot.com",
    messagingSenderId: "627544312111"
};

firebase.initializeApp(config);


angular.module('InventoryApp', [
	'firebase', 
	'ui.router', 
	'NavController',  
	'NavDirective',
	'OrdersController',
	])

.config(function($stateProvider) {
  $stateProvider
  .state({
    name: 'products',
    url: '/products',
    templateUrl: 'products/templates/products.html'
  })
  .state({
    name: 'orders',
    url: '/orders',
    templateUrl: 'orders/templates/orders.html'
  })
  .state({
    name: 'contacts',
    url: '/contact?id&something&new',
    templateUrl: 'contacts/templates/contacts.html'
  })
})

.config(function($firebaseRefProvider) {
	$firebaseRefProvider.registerUrl({
		default:config.databaseURL,
		object: `${config.databaseURL}/angular/object`,
		nav: `${config.databaseURL}/angular/nav`,
	});
})

.factory('ObjectFactory', function($firebaseObject, $firebaseRef) {
	return $firebaseObject($firebaseRef.object);
})

.controller('MyCtrl', function($scope, ObjectFactory){
	$scope.object = ObjectFactory;
})

// OLD CODE
	
.controller('ProductListCtrl', function($scope, ProductList, Headers){
	$scope.products = ProductList;
	$scope.header = Headers.productHeaders;

})

.controller('OrderListCtrl', function($scope, OrderList, Headers){
	$scope.orders = OrderList;
	$scope.header = Headers.orderHeaders;
	// $scope.view = function(item) {
	// 	console.log(item);
	// }
})

.controller('ContactListCtrl', function($scope, ContactList, Headers){
	$scope.contacts = ContactList;
	$scope.header = Headers.contactHeaders;

})


// DIRECTIVES

.directive('columnHeaders', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    }, 
    templateUrl: "templates/column-headers.html"
	}; 
})

.directive('productLineItems', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    }, 
    templateUrl: 'templates/product-line-items.html'
	}; 
})

.directive('orderLineItems', function() { 

	function controller($scope ) {
			$scope.view = function(item) {
			console.log(item);
		};
	}

  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=',
      view: '&' 
    }, 
    controller: controller,
    templateUrl: 'templates/order-line-items.html'
	}; 
})


.directive('contactLineItems', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      dataset: '=' 
    }, 
    templateUrl: 'templates/contact-line-items.html'
	}; 
})



// FACTORIES


.factory('ProductList', function(){
	return [
		{
			name: "box",
			price: 10,
			img: "img/box.png"
		},
		{
			name: "box2",
			price: 10,
			img: "img/box.png"
		},
		{
			name: "box3",
			price: 10,
			img: "img/box.png"
		}
	];
})

.factory('OrderList', function(){
	return [
		{
			number: "01",
			contact: "bill",
			price: 40
		},
		{
			number: "02",
			contact: "billll",
			price: 4004
		},
		{
			number: "03",
			contact: "billllll",
			price: 404
		}
	];
})

.factory('ContactList', function(){
	return [
		{
			name: "joe",
			email: 'some@thing.com',
			address: "589 Clementina Blvd"
		},
		{
			name: "joe2",
			email: 'some@thing.com',
			address: "589 Clementina Blvd"
		},
		{
			name: "jo3e",
			email: 'some@thing.com',
			address: "589 Clementina Blvd"
		}
	];
})

.factory('Headers', function(){
	var productHeaders = {
		col_1: "Image",
		col_2: "Name",
		col_3: "Price"
		};

	var contactHeaders= {
		col_1: "Name",
		col_2: "Email",
		col_3: "Address"
		};

	var orderHeaders={
		col_1: "Number",
		col_2: "Contact",
		col_3: "Price"
	};

	return {
			productHeaders: productHeaders,
			contactHeaders: contactHeaders,
			orderHeaders: orderHeaders
			};
	}					
)

;
}());