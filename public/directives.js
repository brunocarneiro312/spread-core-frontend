(function() {
    'use strict';

    angular.module('spread.accordion.module')
        .directive('spreadAccordion', spreadAccordion);

    function spreadAccordion() {
        return {
            restrict: 'E',
            scope: {

            },
            link: function(scope, element, attr, ctrl) {

            },
            templateUrl: '/views/accordion.html',
            controller: 'SpreadAccordionController',
        }
    }
})();
(function() {
    'use strict';

    angular.module('spread.carousel.module')
        .directive('spreadCarousel', spreadCarousel);

    function spreadCarousel()
    {
        return {
            restrict: 'E',
            template: '<h2>Carousel</h2>',
            scope: {

            }
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