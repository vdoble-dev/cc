(function () {
  'use strict';

  angular
    .module('mainApp.productos')
    .controller('ProductosController', ProductosController);

  /** @ngInject */
  function ProductosController($state, productos) {
    var vm = this;

    vm.productos = getCustomProducts();
    console.log(vm.productos);

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
