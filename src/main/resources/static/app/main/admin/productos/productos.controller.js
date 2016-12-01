(function () {
  'use strict';

  angular
    .module('admin.productos')
    .controller('AdminProductosController', AdminProductosController);

  /** @ngInject */
  function AdminProductosController($state, productos) {
    var vm = this;

    vm.productos = angular.copy(productos);

    vm.crearNuevo = function () {
        $state.go('admin.productos.nuevo', {id: 0});
    };

    vm.editar = function (id) {
       $state.go('admin.productos.nuevo', {id: id});
    };

  }
})();
