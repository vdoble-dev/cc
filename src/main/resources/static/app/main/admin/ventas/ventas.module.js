(function ()
{
    'use strict';
    angular.module('admin.ventas', [])
        .config(['$stateProvider', '$urlRouterProvider', configMainApp]);
    function configMainApp($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('admin.ventas', {
            url: '/ventas',
            resolve: {
               ventas: function (AdminVentasService) {
                    return AdminVentasService.getAll().then(function (data) {
                        return data.data;
                    });
                }
            },
            views: {
                'content@admin': {
                    templateUrl: 'app/main/admin/ventas/ventas.html',
                    controller: 'AdminVentasController as vm'
                }
            }
        })
        .state('admin.ventas.detalles', {
            url: '/{id: int}/detalles',
            params: {
                venta: null
            },
            resolve: {
            },
            onEnter: function ($stateParams, $state, $mdDialog) {
                $mdDialog.show({
                    templateUrl: 'detalleVenta.html',
                    parent: angular.element(document.body),
                    onComplete: function () {
                        $state.go('^');
                    },
                    controller: function ($state, $stateParams) {
                        var vm = this;

                        vm.venta = $stateParams.venta;

                        vm.close = function () {
                            $mdDialog.hide();
                        };

                    },
                    controllerAs: 'vm'
                });
            }
        });
    }
})();