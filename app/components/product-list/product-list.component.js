angular.module('rentalApp')
  .controller('ProductListController', ProductListController);

function ProductListController($http) {
  var vm = this;
  vm.products = [];
  vm.cartItems = [];

  $http.get('/api/products')
    .then(function(response) {
      vm.products = response.data;
    });

  vm.addToCart = function(product) {
    var existingItem = vm.cartItems.find(function(item) {
      return item.id == product.id;
    });

    if (existingItem) {
      existingItem.quantity++;
    } else {
      vm.cartItems.push(angular.copy(product)); 
      vm.cartItems[vm.cartItems.length - 1].quantity = 1;
    }
  };
}