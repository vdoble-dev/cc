(function ()
{
    'use strict';
    angular.module('admin.clientes', [])
        .config(['$stateProvider', '$urlRouterProvider', configMainApp]);
    function configMainApp($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('admin.clientes', {
            url: '/clientes',
            resolve: {
               clientes: function (AdminClientesService) {
                    return AdminClientesService.getAll().then(function (data) {
                        return data.data;
                    });
                }
            },
            views: {
                'content@admin': {
                    templateUrl: 'app/main/admin/clientes/clientes.html',
                    controller: 'AdminClientesController as vm'
                }
            }
        });
    }
})();