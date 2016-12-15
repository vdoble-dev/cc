(function () {
  'use strict';

  angular
    .module('admin.ventas')
    .controller('AdminVentasController', AdminVentasController);

  /** @ngInject */
  function AdminVentasController($state, ventas, DTOptionsBuilder, UtilService) {
    var vm = this;
    vm.ventas = angular.copy(ventas);

    vm.dtOptions = UtilService.getCommonTableConfig();

    vm.dtOptions.aoColumnDefs = [{
      aTargets: [0, 1, 2, 3, 4]
    }];

    vm.detalles = function (venta) {
        $state.go('admin.ventas.detalles', {id: venta.id, venta: venta});
    };

  }
})();
