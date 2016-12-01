(function () {
  'use strict';

  angular
    .module('admin.productos')
    .controller('AdminProductosController', AdminProductosController);

  /** @ngInject */
  function AdminProductosController($state, productos, DTOptionsBuilder, UtilService) {
    var vm = this;

    vm.productos = angular.copy(productos);

    vm.crearNuevo = function () {
        $state.go('admin.productos.nuevo', {id: 0});
    };

    vm.editar = function (id) {
       $state.go('admin.productos.nuevo', {id: id});
    };


    vm.dtOptions = UtilService.getCommonTableConfig();

    vm.dtOptions.aoColumnDefs = [{
      bSortable: false,
      aTargets: [0, 1, 2, 3, 4, 5]
    }];

  }
})();
