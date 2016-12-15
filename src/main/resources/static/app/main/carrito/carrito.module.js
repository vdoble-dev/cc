(function ()
{
    'use strict';
    angular.module('mainApp.carrito', [])
        .config(['$stateProvider', '$urlRouterProvider', configMainApp]);
    function configMainApp($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('mainApp.carrito', {
            url: '/carrito',
            resolve: {
                productosSeleccionados: function (localStorageService) {
                    return localStorageService.get('carrito');
                }
            },
            views: {
                'content@mainApp': {
                    templateUrl: 'app/main/carrito/carrito.html',
                    controller: 'CarritoController as vm'
                }
            }
        });
    }
})();