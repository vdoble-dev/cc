(function () {
  'use strict';

  angular
    .module('admin.productos')
    .controller('AdminProductosNuevoController', AdminProductosNuevoController);

  /** @ngInject */
  function AdminProductosNuevoController($scope, $state, $mdDialog, $mdToast, AdminProductosService, producto, Upload, cloudinary) {
    var vm = this;
    vm.producto = angular.copy(producto);

    $scope.option = {
            "browseIconCls":"myBrowse",
            "removeIconCls":"myRemove",
            "captionIconCls":"myCaption",
            "unknowIconCls":"myUnknow"
        };

    vm.post = function (ev) {
        var confirmDialog = $mdDialog.confirm()
                .title('¿Desea Guardar?')
                .targetEvent(ev)
                .ok('Aceptar')
                .cancel('Cancelar');

              $mdDialog.show(confirmDialog)
                .then(function () {

//                Upload.upload({
//                    url: "https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload",
//                    data: {
//                      upload_preset: cloudinary.config().upload_preset,
//                      tags: 'myphotoalbum',
//                      context: 'photo=' + $scope.title,
//                      file: $scope.files[0].lfFile
//                    }
//                  }).success(function (data, status, headers, config) {
                    vm.producto.rutaImagen = 'app/assets/img.png'//data.url;
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
//                  });
                });





    };

  }
})();
