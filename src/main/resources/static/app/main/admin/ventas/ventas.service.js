(function() {
  'use strict';

  angular
    .module('admin.ventas')
    .service('AdminVentasService', AdminVentasService);

  /** @ngInject */
  function AdminVentasService($http) {

    this.getAll = function() {
      return $http.get('/api/compras');
    };

    this.getOne = function(_id) {
      return $http.get('/api/compras/' + _id);
    };
  }
})();
