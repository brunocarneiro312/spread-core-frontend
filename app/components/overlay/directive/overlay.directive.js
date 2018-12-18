(function() {
    'use strict';

    angular.module('spread.overlay.module')
        .directive('spreadOverlay', spreadOverlay);

    function spreadOverlay()
    {
        return {
            templateUrl: '/views/overlay.html',
            controller: 'SpreadOverlayController',
            scope: {
                isOverlay: '='
            },
        }
    }
})();