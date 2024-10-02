angular.module('rentalApp')
  .controller('ProductDetailsController', ProductDetailsController);

function ProductDetailsController($http, $routeParams, $location, CartService) {
  var vm = this;
  
  vm.productId = $routeParams.productId;
  vm.product = {}; 

  $http.get('http://localhost:3005/products/' + vm.productId) 
    .then(function(response) {
      vm.product = response.data;
      console.log("produto", vm.product);
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