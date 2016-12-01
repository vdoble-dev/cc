(function() {
  'use strict';

  angular
    .module('admin.productos')
    .service('AdminProductosService', AdminProductosService);

  /** @ngInject */
  function AdminProductosService($http) {

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
        return this.put(producto);
      }
    };

    this.put = function(producto) {
      return $http({
        method: 'PUT',
        url: '/api/productos/',
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
