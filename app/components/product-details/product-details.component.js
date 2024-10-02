angular.module('rentalApp')
  .controller('ProductDetailsController', ProductDetailsController);

function ProductDetailsController($http, $routeParams) {
  var vm = this;
  vm.productId = $routeParams.productId;
  console.log("🚀 ~ ProductDetailsController ~ vm.productId:", vm.productId)
 
  vm.product = {}; 

  // Fetch the product details from the backend (or use a service)
  $http.get('http://localhost:3005/products/' + vm.productId) 
    .then(function(response) {
      vm.product = response.data;
      console.log("produto", vm.product);
    }).catch(function(error){
      console.log(error);
    });

  // vm.addToCart = function() {
  //   // ... (Add to cart logic - you'll likely use a service to manage the cart)
  // };
}