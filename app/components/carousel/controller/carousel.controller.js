(function() {
    'use strict';

    angular.module('spread.carousel.module')
        .controller('SpreadCarouselController', SpreadCarouselController);

    function SpreadCarouselController($scope)
    {
        function init()
        {
            console.log('CarouselController');
        }
        init();
    }
})();