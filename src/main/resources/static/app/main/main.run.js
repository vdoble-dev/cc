(function ()
{
    'use strict';

    angular
        .module('mainApp')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $state)
    {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            console.log('$stateChangeError');
            if (error === 'AUTH_REQUIRED') {
                console.log('AUTH_REQUIRED');
            }
        });
    }
})();