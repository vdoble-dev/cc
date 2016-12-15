(function() {
  'use strict';

  angular
    .module('mainApp.carrito')
    .service('CarritoService', CarritoService);

  /** @ngInject */
  function CarritoService($http) {

    this.post = function(compra) {
      if (compra.id == null) {
        return $http({
          method: 'POST',
          url: '/api/compras/',
          data: angular.toJson(compra),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
      } else {
        return this.put(compra.id, compra);
      }
    };

    this.put = function(_id, compra) {
      return $http({
        method: 'PUT',
        url: '/api/compras/' + _id,
        data: angular.toJson(compra),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    };

    this.getAll = function() {
      return $http.get('/api/compras');
    };

    this.getOne = function(_id) {
      return $http.get('/api/compras/' + _id);
    };
  }
})();
