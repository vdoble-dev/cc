(function () {
  'use strict';

  angular
    .module('mainApp.productos')
    .controller('ProductosController', ProductosController);

  /** @ngInject */
  function ProductosController($state, productos, localStorageService) {
    var vm = this;
    vm.productos = getCustomProducts();
    vm.productosSeleccionados = localStorageService.get('carrito') || [];

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
        var prod = {};
        prod.producto = angular.copy(producto);
        prod.cantidad = 1;
        prod.precio = prod.producto.precio;
        prod.total = prod.cantidad * prod.producto.precio;

        vm.productosSeleccionados.push(prod);
        localStorageService.set('carrito', vm.productosSeleccionados);
    };

    vm.removeProduct = function (producto) {
        if(existProduct(producto)) vm.productosSeleccionados.splice(getIndexProduct(producto), 1);

        localStorageService.set('carrito', vm.productosSeleccionados);
    };

    vm.showAddButton = function (producto) {
        return !existProduct(producto);
    };

    vm.showRemoveButton = function (producto) {
        return existProduct(producto);
    };

    function existProduct(producto) {
        for(var i = 0; i < vm.productosSeleccionados.length; i++) {
            if(vm.productosSeleccionados[i].producto.id === producto.id) {
                return true;
            }
        }
       return false;
    }

    function getIndexProduct(producto) {

        for(var i = 0; i < vm.productosSeleccionados.length; i++) {
        if(vm.productosSeleccionados[i].producto.id === producto.id) {
                 return i;
             }
         }

        return -1;
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
