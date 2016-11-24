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
		console.log('test');
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
  
	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};

	$scope.contactAdd = function(newcontact) {
		console.log('test');
		// ContactList.push($scope.newcontact);
		writeContactData(newcontact);
		$scope.newcontact = {};
	};

	function writeContactData(newcontact) {
		
		var count = 0;
		function contactCount() {
			var rawObject = $firebaseObject($firebaseRef.contacts);
			console.log(rawObject);

			// MAYBE?	

			// var contacts = [];
			// angular.forEach(rawObject, function(value, key) {
			// 	if(key === ''){	
			//   		this.push(key + ': ' + value);
			// 	}
			// }, contacts);
			// console.log(contacts);

			for (var key in rawObject) {
				console.log(key);
			   if (key.hasOwnProperty('name')) {
			      	count ++;
			   }
			}
			console.log(count);

			// for (var key in contacts) {
			//    if (contacts.hasOwnProperty(key)) {
			//       var obj = contacts[key];
			//       for (var prop in obj) {
			//          if (obj.hasOwnProperty(prop)) {
			//             alert(prop + " = " + obj[prop]);
			//          }
			//       }
			//    }
			// }



		}
		contactCount();

		firebase.database().ref('angular/contacts/contact' + $scope.newcontact.id)
			.set($scope.newcontact);
	}

})

;