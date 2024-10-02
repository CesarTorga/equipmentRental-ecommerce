angular.module('rentalApp')
  .controller('LoginController', LoginController);

function LoginController($http, $location, AuthService) {
  var vm = this; // "Controller as" sintaxe
  vm.email = '';
  vm.password = '';
  vm.errorMessage = '';

  vm.login = async function() {
    $http.post('http://localhost:3005/login', { 
      email: vm.email, 
      password: vm.password 
    })
    .then(function(response) {
      AuthService.setToken(response.data.token);
      $location.path('/products'); 
    }, function(error) {
      console.error("Login failed:", error);
      if (error.status === 401) {
        vm.errorMessage = "Email ou Senha inválida, tente novamente!";
      } else if (error.status === 405) {
        vm.errorMessage = "Método não permitido. Entre em contato com o suporte.";
      } else {
        vm.errorMessage = "Ocorreu um erro. Tente novamente mais tarde.";
      }
    })
    .catch(function(error){
      console.log(error);
    });
  };
}