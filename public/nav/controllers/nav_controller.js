angular.module('NavController', ['firebase', 'ui.router','angularModalService'])

.controller('NavCtrl', function ($scope, ProductList, ContactList, NavFirebase, ModalService) {

	$scope.nav = NavFirebase;

	$scope.showProductAdd = function() {
		console.log('test');
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

.controller('ProductAddModalController', function($scope, close, ProductList) {
  
	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};

	$scope.productAdd = function (result) {
		console.log('testbutton');
		ProductList.push($scope.newProd);
		$scope.newProd = {};
	};

})

.controller('ContactAddModalController', function($scope, close, ContactList, $firebaseObject, $firebaseRef) {
  
  	var ifExists = false;
  	$scope.ifContact = function() {
  		return ifExists;
  	}

	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};

	$scope.contactAdd = function() {
		// ContactList.push($scope.newcontact);
		ifExists = false;
		writeContactData();
		$scope.newcontact = {};
	};

	function writeContactData() {
		var newContact = $scope.newcontact;
		var contactAvailable = checkContacts();
		console.log('checkContact results -', contactAvailable);
		return new Promise(function(resolve, reject) {
			resolve(contactAvailable);
		})
		.then(function() {
			if (contactAvailable === true) {
				firebase.database().ref('angular/contacts/' + newContact.name)
				.set(newContact);
				console.log('Contact Added');
			} else {
				ifExists = true;
				console.log('ifExists', ifExists);
				$scope.ifContact();
				console.log('Contact already exists');
			}
		});
	}

	function checkContacts() {
		var newContact = $scope.newcontact;
		var available;
		console.log('name of new contact', newContact.name);		
		var rawObject = $firebaseObject($firebaseRef.contacts);
		rawObject.$loaded()
		.then(function() {
			for(var key in rawObject) {	
				console.log(key);
				if (newContact.name === key) {
					available = false;
					return;
				} else {
					available = true;
				}
			}	
		});
		console.log('available', available);
		return available;		
	}

})

;