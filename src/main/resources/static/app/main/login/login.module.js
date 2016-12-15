(function ()
{
    'use strict';
    angular.module('mainApp.login', [])
        .config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider', configLoginApp]);
    function configLoginApp($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
        // LocalStorage
        localStorageServiceProvider
          .setPrefix('cc');

        $stateProvider
        .state('mainApp.login', {
            url: '/login',
            resolve: {
            },
            views: {
                'content@mainApp': {
                    templateUrl: 'app/main/login/login.html',
                    controller: 'LoginController as vm'
                }
            }
        });
    }
})();