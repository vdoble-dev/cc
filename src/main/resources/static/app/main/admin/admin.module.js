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
            'cloudinary',
            'ngFileUpload',
            'lfNgMdFileInput',
            'app.util',
            'admin.productos']);

    angular.module('admin')
        .config(['$stateProvider', '$urlRouterProvider', 'cloudinaryProvider', configAdmin]);


    function configAdmin($stateProvider, $urlRouterProvider, cloudinaryProvider) {
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



        cloudinaryProvider
              .set("cloud_name", "dg2fr3vrw")
              .set("upload_preset", "m5o1mveh");
    }
})();