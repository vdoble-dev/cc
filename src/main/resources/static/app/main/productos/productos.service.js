(function() {
  'use strict';

  angular
    .module('mainApp.productos')
    .service('ProductosService', ProductosService);

  /** @ngInject */
  function ProductosService($http) {

    this.post = function(producto) {
      if (producto.id == null) {
        return $http({
          method: 'POST',
          url: '/api/productos/',
          data: angular.toJson(producto),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
      } else {
        return this.put(producto.id, producto);
      }
    };

    this.put = function(_id, producto) {
      return $http({
        method: 'PUT',
        url: '/api/productos/' + _id,
        data: angular.toJson(producto),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    };

    this.getAll = function() {
      return $http.get('/api/productos');
    };

    this.getOne = function(_id) {
      return $http.get('/api/productos/' + _id);
    };
  }
})();
