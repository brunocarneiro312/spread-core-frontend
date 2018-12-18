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