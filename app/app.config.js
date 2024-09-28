angular.module('rentalApp')
.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/components/login/login.template.html',
      controller: 'LoginController',
      controllerAs: 'vm' // Use "controller as" syntax
    })   
    .when('/', { // Redirect to login if not authenticated
      redirectTo: '/login' 
    })
    .when('/products', {
      templateUrl: 'app/components/product-list/product-list.template.html',
      controller: 'ProductListController',
      controllerAs: 'vm'
    })
    .when('/product/:productId', { // Product Details route
      templateUrl: 'app/components/product-details/product-details.template.html',
      controller: 'ProductDetailsController',
      controllerAs: 'vm'
    })
    // Add more routes as needed
    .otherwise({
      redirectTo: '/login'
    });
});