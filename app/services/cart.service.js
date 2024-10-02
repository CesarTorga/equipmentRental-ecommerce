angular.module('rentalApp')
  .service('CartService', CartService);

function CartService() {
  var vm = this;
  vm.cartItems = [];

  vm.addToCart = function(product) {
    var existingItem = vm.cartItems.find(function(item) {
      return item.id === product.id;
    });

    if (existingItem) {
      existingItem.quantity++;
    } else {
      vm.cartItems.push(angular.copy(product)); 
      vm.cartItems[vm.cartItems.length - 1].quantity = 1;
    }
  };

  vm.getCartItems = function() {
    return vm.cartItems;
  };

  vm.getTotalCartValue = function() {
    var total = 0;
    vm.cartItems.forEach(function(item) {
      total += item.rentalPrices.day * item.quantity;
    });
    return total;
  };

  vm.removeFromCart = function(item) {
    var index = vm.cartItems.indexOf(item);
    if (index !== -1) {
      vm.cartItems.splice(index, 1);
    }
  };
}