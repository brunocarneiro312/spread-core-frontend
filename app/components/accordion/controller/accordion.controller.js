(function() {
    'use strict';

    angular.module('spread.accordion.module')
        .controller('SpreadAccordionController', SpreadAccordionController);

    function SpreadAccordionController($scope)
    {
        $scope.debug           = true;
        $scope.itens           = []; // Armazena cada elemento presente no accordion
        $scope.selectedElement = undefined;

        $scope.toggle     = toggle;
        $scope.isSelected = isSelected;
        $scope.debug      = debug;

        function init() {
            if ($scope.debug) {
                $scope.itens.push('menu1', 'menu2', 'menu3');
            }
        }
        init();

        function toggle(listItem) {
            $scope.selectedElement = listItem;
        }

        function isSelected(listItem) {
            return $scope.selectedElement === listItem;
        }

        function debug() {

        }
    }
})();