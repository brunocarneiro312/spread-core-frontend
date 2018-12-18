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