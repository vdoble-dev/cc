(function() {
  'use strict';

  angular
    .module('mainApp.registro')
    .service('RegistroService', RegistroService);

  /** @ngInject */
  function RegistroService($http) {

    this.post = function(cliente) {
      if (cliente.id == null) {
        return $http({
          method: 'POST',
          url: '/api/clientes/',
          data: angular.toJson(cliente),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
      } else {
        return this.put(cliente.id, cliente);
      }
    };

    this.put = function(_id, cliente) {
      return $http({
        method: 'PUT',
        url: '/api/clientes/' + _id,
        data: angular.toJson(cliente),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    };

    this.getAll = function() {
      return $http.get('/api/clientes');
    };

    this.getOne = function(_id) {
      return $http.get('/api/clientes/' + _id);
    };
  }
})();
