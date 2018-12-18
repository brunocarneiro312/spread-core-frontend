(function() {
    'use strict';

    angular.module('spread.overlay.module')
        .controller('SpreadOverlayController', SpreadOverlayController);

    function SpreadOverlayController($scope)
    {
        $scope.isOverlay = undefined;

        $scope.applyOverlay  = applyOverlay;
        $scope.removeOverlay = removeOverlay;
        $scope.toggleOverlay = toggleOverlay;

        function init()
        {

        }
        init();

        function applyOverlay()
        {
            $scope.isOverlay = true;
        }

        function removeOverlay()
        {
            $scope.isOverlay = false;
        }

        function toggleOverlay()
        {
            $scope.isOverlay = !$scope.isOverlay;
        }
    }
})();