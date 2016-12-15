(function () {
  'use strict';

  angular
    .module('mainApp.login')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($state, $mdToast, $mdDialog, LoginService) {
    var vm = this;

    vm.cliente = {};

    vm.isLogedIn = {state: LoginService.isLogedIn()};

    if(vm.isLogedIn.state) $state.go('mainApp.productos');

    vm.login = function () {
        LoginService.login(vm.cliente, function (data) {
            if(data.error) {
                $mdToast.show(
                    $mdToast.simple()
                      .textContent(data.error)
                      .position('top right')
                      .hideDelay(3000)
                  );
                  vm.cliente = {};
            } else {
                vm.isLogedIn.state = true;
                $mdToast.show(
                    $mdToast.simple()
                      .textContent('Bienvenido...')
                      .position('top right')
                      .hideDelay(3000)
                  );
                $state.go('mainApp.productos', {}, {reload: true});
            }

        });
    };

    vm.logout = function (ev) {
        var confirmDialog = $mdDialog.confirm()
            .title('¿Desea Salir?')
            .targetEvent(ev)
            .ok('Aceptar')
            .cancel('Cancelar');

          $mdDialog.show(confirmDialog)
            .then(function () {
                LoginService.logout();
                    $state.go('mainApp.login', {}, {reload: true});
            });
    };

  }
})();
