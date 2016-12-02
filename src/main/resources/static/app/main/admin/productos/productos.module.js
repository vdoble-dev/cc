(function ()
{
    'use strict';
    angular.module('admin.productos', [])
        .config(['$stateProvider', '$urlRouterProvider', configMainApp]);
    function configMainApp($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('admin.productos', {
            url: '/productos',
            resolve: {
               productos: function (AdminProductosService) {
                    return AdminProductosService.getAll().then(function (data) {
                        return data.data;
                    });
                }
            },
            views: {
                'content@admin': {
                    templateUrl: 'app/main/admin/productos/productos.html',
                    controller: 'AdminProductosController as vm'
                }
            }
        })
        .state('admin.productos.nuevo', {
            url: '/{id}',
            views: {
              'content@admin': {
                templateUrl: 'app/main/admin/productos/nuevo/productos-nuevo.html',
                controller: 'AdminProductosNuevoController as vm'
              }
            },
            resolve: {
                producto: function ($state, $stateParams, AdminProductosService) {
                    if($stateParams.id === '0') {
                        return {
                            id: null,
                            nombre: null,
                            precio: null,
                            cantidad: null,
                            descripcion: null,
                            rutaImagen: null

                        };
                    } else if ($stateParams.id === '') {
                        $state.go('admin.productos');
                    }
                    else
                    {
                        return AdminProductosService.getOne($stateParams.id).then(function (data) {
                            return data.data;
                        });
                    }
                }
            }
          });
    }
})();