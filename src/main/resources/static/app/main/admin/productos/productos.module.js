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
/*                productos: function (ProductosService) {
                    return ProductosService.getAll().then(function (data) {
                        return data.data;
                    });
                }*/
            },
            views: {
            'content@admin': {
                templateUrl: 'app/main/admin/productos/productos.html',
                controller: 'AdminProductosController as vm'
            }
            }
        });
    }
})();