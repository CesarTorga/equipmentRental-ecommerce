angular.module('rentalApp')
  .controller('LoginController', LoginController);

function LoginController($http, $location, AuthService) {
  var vm = this; // "Controller as" syntax

  vm.login = async function() {
    $http.post('http://localhost:3005/login', { 
      email: vm.email, 
      password: vm.password 
    })
    .then(function(response) {
      AuthService.setToken(response.data.token);
      // vm.$emit('login'); 
      $location.path('/products'); 
    }, function(error) {
      console.error("Login failed:", error);
      if (error.status === 401) {
        vm.loginError = "Invalid email or password.";
      } else if (error.status === 405) {
        vm.loginError = "Method not allowed. Please contact support.";
      } else {
        vm.loginError = "An error occurred. Please try again later.";
      }
    })
    .catch(function(error){
      console.log(error);
    });
  };
}