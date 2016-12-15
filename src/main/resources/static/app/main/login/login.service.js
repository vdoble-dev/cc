(function() {
  'use strict';

  angular
    .module('mainApp.login')
    .service('LoginService', LoginService);

  /** @ngInject */
  function LoginService($http, localStorageService) {

    this.isLogedIn = function () {
        var isLogedIn = false;
        if(localStorageService.get('credentials') !== null) {
          isLogedIn = true;
        }
        return isLogedIn;
    };

    this.login = function (cliente, cb) {
        check(cliente).then(function (data) {
            if(data.data !== "") {
                localStorageService.set('credentials', data.data);
                cb(data);
            } else {
                cb({error: "Credenciales Incorrectas..."});
            }
        });
    };

    this.logout = function (cliente, cb) {
        localStorageService.set('credentials');
    };

    /*
    * Private functions
    */
    function check(cliente) {
        return $http({
          method: 'POST',
          url: '/api/clientes/check',
          data: angular.toJson(cliente),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
    }
  }
})();
