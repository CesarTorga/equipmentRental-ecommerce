angular.module('rentalApp')
  .controller('ProductListController', ProductListController);

function ProductListController($http, CartService) {
  var vm = this;
  vm.products = [];
  vm.filteredProducts = [];

  $http.get('http://localhost:3005/products')
  .then(function(response) {
    vm.products = response.data;
    vm.filterProducts();

  }).catch(function(error){
    console.log(error);
  });

  vm.filterProducts = function() {
    // Lógica de filtro
    if (vm.searchTerm) {
      vm.filteredProducts = vm.products.filter(function(product) {
        return product.name.toLowerCase().includes(vm.searchTerm.toLowerCase());
      });
    } else {
      vm.filteredProducts = vm.products; // Exibe todos os produtos se o termo de busca estiver vazio
    }
  };

  vm.addToCart = function(product) {
    CartService.addToCart(product); 
  };

  vm.cartItems = CartService.getCartItems();

  vm.getTotalCartValue = function() {
    return CartService.getTotalCartValue(); 
  };

  vm.removeFromCart = function(item) {
    CartService.removeFromCart(item); 
  };

  vm.addQuantity = function(item) {
    item.quantity++;
    vm.updateCart(); // Atualiza o carrinho (inclui o valor total)
  };
  
  vm.subtractQuantity = function(item) {
    if (item.quantity > 1) {
      item.quantity--;
      vm.updateCart(); // Atualiza o carrinho (inclui o valor total)
    }
  };

  vm.updateCart = function() {
    vm.totalCartValue = CartService.getTotalCartValue();
  };
}