angular.module('InventoryApp', [
	'firebase', 
	'ui.router',
	'angularModalService', 
	'NavController',  
	'NavDirective',
	'OrdersController',
	'OrdersDirective',
	'ProductsController',
	'ProductsDirective',
	'ContactsController',
	'ContactsDirective',
	'ColumnHeaderDirective',
	'FirebaseFactories'
	])

.config(function($stateProvider) {
  $stateProvider
  .state({
  	name:'home',
  	url: '/',
  	templateUrl:'nav/templates/main-page.html'
  })
  .state({
    name: 'products',
    url: '/products',
    templateUrl: 'products/templates/products.html',
    redirectTo: '/'
  })
  .state({
    name: 'orders',
    url: '/orders',
    templateUrl: 'orders/templates/orders.html',
    redirectTo: '/'
  })
  .state({
    name: 'contacts',
    url: '/contacts?id&something&new',
    templateUrl: 'contacts/templates/contacts.html',
    redirectTo: '/'
  });
})

.factory('ProductList', function(){
	return [
		// {
		// 	name: "box",
		// 	price: 10,
		// 	img: "img/box.png"
		// },
		// {
		// 	name: "box2",
		// 	price: 12,
		// 	img: "img/box.png"
		// },
		// {
		// 	name: "box3",
		// 	price: 13,
		// 	img: "img/box.png"
		// }
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
		// {
		// 	name: "joe",
		// 	email: 'some@thing.com',
		// 	address: "589 Clementina Blvd"
		// },
		// {
		// 	name: "joe2",
		// 	email: 'some@thing.com',
		// 	address: "589 Clementina Blvd"
		// },
		// {
		// 	name: "jo3e",
		// 	email: 'some@thing.com',
		// 	address: "589 Clementina Blvd"
		// }
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