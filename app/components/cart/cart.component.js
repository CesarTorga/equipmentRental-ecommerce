angular.module('rentalApp')
  .controller('CartController', CartController);

function CartController() {
  var vm = this;

  // Sample cart items (replace with actual data from service/local storage)
  vm.cartItems = [
    // { id: 1, name: 'Product 1', quantity: 2, price: 10.00 },
    // { id: 2, name: 'Product 2', quantity: 1, price: 25.50 }
  ];

  vm.updateCartItemQuantity = function(item, quantity) {
    // Logic to update cart item quantity (e.g., update local storage/service)
    item.quantity = quantity;
  };

  vm.removeFromCart = function(index) {
    // Logic to remove item from cart (e.g., update local storage/service)
    vm.cartItems.splice(index, 1);
  };
}