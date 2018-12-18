(function() {
    'use strict';

    angular.module('sandbox.module')
        .controller('ComponenteController', ComponenteController);

    function ComponenteController($scope)
    {
        $scope.isAccordion = undefined;
        $scope.isCarousel  = undefined;
        $scope.isModal     = undefined;
        $scope.isOverlay   = undefined;
        $scope.isTable     = undefined;

        function init()
        {
            $scope.isAccordion = true;
        }
        init();
    }
})();