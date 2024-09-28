angular.module('rentalApp', ['ngRoute'])
.controller('MainController', function($scope, $location, AuthService) {
    $scope.isAuthenticated = AuthService.isAuthenticated();
  
    $scope.$on('login', function() {
      $scope.isAuthenticated = true; 
    });
  
    $scope.$on('logout', function() {
      $scope.isAuthenticated = false;
    });
  
    $scope.logout = function() {
      AuthService.logout();
      $scope.$broadcast('logout'); 
      $location.path('/login');
    };
  });