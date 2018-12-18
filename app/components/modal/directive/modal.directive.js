(function() {
    'use strict';

    angular.module('spread.modal.module')
        .directive('spreadModal', spreadModal);

    function spreadModal() ]
    {
        return {
            restrict: 'E',
            template: '<h2>Modal</h2>',
            scope: {

            }
        }
    }
})();