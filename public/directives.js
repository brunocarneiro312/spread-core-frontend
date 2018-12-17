(function() {
    'use strict';

    angular.module('spread.accordion.module')
        .directive('spreadAccordionElement', spreadAccordionElement);

    function spreadAccordionElement() {
        return {
            restrict: 'E',
            templateUrl: '/views/accordion-element.html',
            scope: {

            }
        }
    }
})();
(function() {
    'use strict';

    angular.module('spread.accordion.module')
        .directive('spreadAccordion', spreadAccordion);

    function spreadAccordion() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {

            },
            templateUrl: '/views/accordion.html',
        }
    }
})();