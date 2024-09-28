angular.module('rentalApp')
  .service('AuthService', function() {
    this.setToken = function(token) {
        localStorage.setItem('token', token);
    };

    this.getToken = function() {
        return localStorage.getItem('token');
    };

    this.logout = function() {
        localStorage.removeItem('token');
    };

    this.isAuthenticated = function() {
        return !!this.getToken(); 
    };
  });