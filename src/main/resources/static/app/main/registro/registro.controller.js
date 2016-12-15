(function () {
  'use strict';

  angular
    .module('mainApp.registro')
    .controller('RegistroController', RegistroController);

  /** @ngInject */
  function RegistroController($state, $mdToast, localStorageService, $mdDialog, RegistroService, LoginService) {
    var vm = this;
    vm.cliente = {};


    vm.post = function (ev) {
        var confirmDialog = $mdDialog.confirm()
            .title('¿Desea Registrarse?')
            .targetEvent(ev)
            .ok('Aceptar')
            .cancel('Cancelar');

          $mdDialog.show(confirmDialog)
            .then(function () {
                RegistroService.post(vm.cliente).then(function (data) {

                    LoginService.login(vm.cliente, function (data) {
                        $mdToast.show(
                            $mdToast.simple()
                              .textContent('Bienvenido...')
                              .position('top right')
                              .hideDelay(3000)
                          );
                          $state.go('mainApp.productos', {}, {reload: true});
                    });


                });
            });

    };


  }
})();
