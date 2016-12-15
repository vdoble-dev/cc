(function ()
{
    'use strict';
    angular
        .module('mainApp', [
            'ngAnimate',
            'ngAria',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngSanitize',
            'ngMaterial',
            'LocalStorageModule',
            'pascalprecht.translate',
            'ui.router',
            'datatables',
            'app.util',
            'mainApp.login',
            'mainApp.productos',
            'mainApp.registro',
            'mainApp.carrito'
        ]);

    angular.module('mainApp')
        .config(['$stateProvider', '$urlRouterProvider', configMainApp]);

    function configMainApp($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/productos');

        $stateProvider
            .state('mainApp', {
                abstract: true,
                views: {
                    'mainApp@': {
                        templateUrl: 'app/components/main.html',
                        controller: function () {
                        }
                    },
                    'toolbar@mainApp': {
                        templateUrl: 'app/components/toolbar.html',
                        controller: function () {
                        }
                    }
                }
          });
    }
})();