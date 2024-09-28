angular.module('rentalApp')
  .controller('ProductDetailsController', ProductDetailsController);

function ProductDetailsController($http, $routeParams) {
  var vm = this;
  vm.productId = $routeParams.productId;
  vm.product = {}; 

  // Fetch the product details from the backend (or use a service)
  $http.get('/api/products/' + vm.productId) 
    .then(function(response) {
      vm.product = response.data;
    });

  vm.addToCart = function() {
    // ... (Add to cart logic - you'll likely use a service to manage the cart)
  };
}