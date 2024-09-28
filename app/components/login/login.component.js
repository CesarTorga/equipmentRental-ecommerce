angular.module('rentalApp')
  .controller('LoginController', LoginController);

function LoginController($http, $location, AuthService) {
  var vm = this; // "Controller as" syntax

  vm.login = function() {
    $http.post('http://localhost:5500/api/login', { 
      email: vm.email, 
      password: vm.password 
    })
    .then(function(response) {
      AuthService.setToken(response.data.token);
      vm.$emit('login'); 
      $location.path('/'); 
    }, function(error) {
      console.error("Login failed:", error);
      // Handle login error (e.g., display a message)
    });
  };
}