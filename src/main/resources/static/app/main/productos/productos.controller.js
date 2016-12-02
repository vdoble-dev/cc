(function () {
  'use strict';

  angular
    .module('mainApp.productos')
    .controller('ProductosController', ProductosController);

  /** @ngInject */
  function ProductosController($state, productos) {
    var vm = this;

    vm.productos = getCustomProducts();

    vm.productosSeleccionados = [];

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

    vm.addProduct = function (producto) {
        vm.productosSeleccionados.push(producto);
    };

    vm.removeProduct = function (producto) {
        if(existProduct(producto)) vm.productosSeleccionados.splice(getIndexProduct(producto), 1);
    };

    vm.showAddButton = function (producto) {
        return !existProduct(producto);
    };

    vm.showRemoveButton = function (producto) {
        return existProduct(producto);
    };

    function existProduct(producto) {
       return vm.productosSeleccionados.indexOf(producto) !== -1;
    }

    function getIndexProduct(producto) {
        return vm.productosSeleccionados.indexOf(producto);
    }

    function getCustomProducts() {
        var customProducts = [];
        var productsTempArray = [];

        for(var i = 0; i < productos.length; i++) {
            productsTempArray.push(angular.copy(productos[i]));
            if(!(((i + 1) % 3) > 0)) {
                customProducts.push(angular.copy(productsTempArray));
                productsTempArray = [];
            }
        }
        if(productsTempArray.length !== 0) {
            customProducts.push(angular.copy(productsTempArray));
        }
        return customProducts;

    }
  }
})();
