(function () {
  'use strict';

  angular
    .module('admin.clientes')
    .controller('AdminClientesController', AdminClientesController);

  /** @ngInject */
  function AdminClientesController($state, clientes, DTOptionsBuilder, UtilService) {
    var vm = this;

    vm.clientes = angular.copy(clientes);

    vm.dtOptions = UtilService.getCommonTableConfig();

    vm.dtOptions.aoColumnDefs = [{
      aTargets: [0, 1, 2, 3, 4]
    }];

  }
})();
