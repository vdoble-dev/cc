(function() {
  'use strict';

  angular
    .module('admin.clientes')
    .service('AdminClientesService', AdminClientesService);

  /** @ngInject */
  function AdminClientesService($http) {

    this.getAll = function() {
      return $http.get('/api/clientes');
    };

    this.getOne = function(_id) {
      return $http.get('/api/clientes/' + _id);
    };
  }
})();
