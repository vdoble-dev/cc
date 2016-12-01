(function ()
{
    'use strict';
    angular
        .module('admin', [
            'ngAnimate',
            'ngAria',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngSanitize',
            'ngMaterial',
            'pascalprecht.translate',
            'ui.router',
            'datatables',
            'app.util',
            'admin.productos']);

    angular.module('admin')
        .config(['$stateProvider', '$urlRouterProvider', configAdmin]);


    function configAdmin($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/productos');
        $stateProvider
            .state('admin', {
                abstract: true,
                views: {
                    'admin@': {
                        templateUrl: 'app/components/main-admin.html',
                        controller: function () {
                        }
                    },
                    'toolbar@admin': {
                        templateUrl: 'app/components/toolbar-admin.html',
                        controller: function () {
                        }
                    },
                     'sidemenu@admin': {
                         templateUrl: 'app/components/sidemenu-admin.html',
                         controller: function () {
                         }
                     }
                }
            });
    }
})();