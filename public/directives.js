(function() {
    'use strict';

    angular.module('spread.accordion.module')
        .directive('spreadAccordion', spreadAccordion);

    function spreadAccordion() {
        return {
            restrict: 'E',
            scope: {

            },
            templateUrl: '/views/accordion.html',
            controller: 'SpreadAccordionController',
        }
    }
})();
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