(function ()
{
    'use strict';
    angular.module('mainApp.registro', [])
        .config(['$stateProvider', '$urlRouterProvider', configMainApp]);
    function configMainApp($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('mainApp.registro', {
            url: '/registro',
            resolve: {
            },
            views: {
                'content@mainApp': {
                    templateUrl: 'app/main/registro/registro.html',
                    controller: 'RegistroController as vm'
                }
            }
        });
    }
})();