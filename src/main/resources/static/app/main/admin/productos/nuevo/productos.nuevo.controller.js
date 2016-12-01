(function () {
  'use strict';

  angular
    .module('admin.productos')
    .controller('AdminProductosNuevoController', AdminProductosNuevoController);

  /** @ngInject */
  function AdminProductosNuevoController($state, $mdDialog, $mdToast, AdminProductosService, producto) {
    var vm = this;
    vm.producto = angular.copy(producto);

    vm.post = function (ev) {
        var confirmDialog = $mdDialog.confirm()
                .title('¿Desea Guardar?')
                .targetEvent(ev)
                .ok('Aceptar')
                .cancel('Cancelar');

              $mdDialog.show(confirmDialog)
                .then(function () {

                    AdminProductosService.post(vm.producto).then(function (data) {
                        console.log(data);
                        $mdToast.show(
                            $mdToast.simple()
                              .textContent('Guardado Satisfactoriamente...')
                              .position('top right')
                              .hideDelay(3000)
                          );
                          $state.go('^', {}, {reload: true});
                    });
                });
    };
  }
})();
