(function ()
{
    'use strict';
    angular.module('productos', [])
        .config(['$stateProvider', '$urlRouterProvider', configMainApp]);
    function configMainApp($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('mainApp.productos', {
            url: '/productos',
            views: {
                'content@mainApp': {
                    template: 'contenido',
                    controller: function () {
                    }
                }
            }
        });
    }
})();