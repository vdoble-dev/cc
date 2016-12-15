(function () {
  'use strict';

  angular
    .module('mainApp.carrito')
    .controller('CarritoController', CarritoController);

  /** @ngInject */
  function CarritoController($state, $mdToast, $mdDialog, localStorageService, LoginService, productosSeleccionados, CarritoService) {
    var vm = this;
    var ERROR = '¡ERROR!'
    vm.productosSeleccionados = productosSeleccionados;
    vm.total = calcularTotal();

    vm.compra = {id: null};

    if(!LoginService.isLogedIn()) {
        $mdToast.show(
            $mdToast.simple()
              .textContent('Inicie Sesión')
              .position('top right')
              .hideDelay(3000)
          );
        $state.go('mainApp.login');
    }



   vm.post = function (ev) {
        var confirmDialog = $mdDialog.confirm()
            .title('¿Desea Comprar?')
            .targetEvent(ev)
            .ok('Aceptar')
            .cancel('Cancelar');

          $mdDialog.show(confirmDialog)
            .then(function () {

                vm.compra.listaDetalleCompra = angular.copy(vm.productosSeleccionados);
                vm.compra.cliente = angular.copy(localStorageService.get('credentials'));
                console.log(vm.compra);
                CarritoService.post(vm.compra).then(function (data) {
                    localStorageService.set('carrito');
                    $mdToast.show(
                        $mdToast.simple()
                          .textContent('Compra Realizada...')
                          .position('top right')
                          .hideDelay(3000)
                      );
                      $state.go('mainApp.productos', {}, {reload: true});
                });
            });
    };


    vm.changeQty = function (productoSeleccionado) {
        var total = productoSeleccionado.precio * productoSeleccionado.cantidad;
        if(!isNaN(total)) {
            if(total == 0) productoSeleccionado.cantidad = 1;
            productoSeleccionado.total = productoSeleccionado.precio * productoSeleccionado.cantidad;
        } else {
           productoSeleccionado.total = ERROR;
        }
        vm.total = calcularTotal();
        localStorageService.set('carrito', vm.productosSeleccionados);
    };

    vm.errorCompra = function () {
        if(vm.productosSeleccionados !== null) {
            return vm.productosSeleccionados.find(function (p) {
                return p.total === ERROR;
            });
        }
    };

    function calcularTotal() {
        var total = 0;
        if (vm.productosSeleccionados !== null) {
            vm.productosSeleccionados.forEach(function (p){
                total += p.total;
            });
        }
        return total;
     }
  }
})();
