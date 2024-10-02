angular.module('rentalApp')
  .controller('ProductDetailsController', ProductDetailsController);

function ProductDetailsController($http, $routeParams, $location, CartService, AuthService) {
  var vm = this;
  
  vm.productId = $routeParams.productId;
  vm.product = {}; 

  vm.isAuthenticated = AuthService.isAuthenticated();

  $http.get('http://localhost:3005/products/' + vm.productId) 
    .then(function(response) {
      vm.product = response.data;
    }).catch(function(error){
      console.log(error);
    });

  vm.addToCart = function() { 
    CartService.addToCart(vm.product); // Usa o serviço para adicionar ao carrinho
    $location.path('/products');
  };

  vm.backToList = function() { 
    $location.path('/products');
  };
}