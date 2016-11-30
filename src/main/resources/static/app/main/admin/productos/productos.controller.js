(function () {
  'use strict';

  angular
    .module('admin.productos')
    .controller('AdminProductosController', AdminProductosController);

  /** @ngInject */
  function AdminProductosController($state/*, productos*/) {
    var vm = this;

    vm.productos = [];

    vm.post = function (_id) {
      $state.go('app.campanias.nuevo', {
        id: 0
      });
    };
    vm.put = function (_id) {
      $state.go('app.campanias.nuevo', {
        id: _id
      });
    }
  }
})();
