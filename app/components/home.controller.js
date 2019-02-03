(function() {
    'use strict';

    angular.module('sandbox.module')
        .controller('HomeController', HomeController);

    function HomeController($scope) {

        // Variáveis
        $scope.isSobre              = undefined;
        $scope.isComoUtilizar       = undefined;
        $scope.isCriandoComponentes = undefined;
        $scope.isAccordion          = undefined;
        $scope.isCarousel           = undefined;
        $scope.isModal              = undefined;
        $scope.isOverlay            = undefined;
        $scope.isTable              = undefined;
        $scope.isFile               = undefined;

        // Funções
        $scope.display = display;

        function init() {
            $scope.isSobre = true;
        }
        init();

        function display(section) {
            console.log(section);
            $scope.isSobre             = section.toLowerCase() === "sobre"             ? true : false;
            $scope.isComoUtilizar      = section.toLowerCase() === "comoutilizar"      ? true : false;
            $scope.isCriandoComponente = section.toLowerCase() === "criandocomponente" ? true : false;
            $scope.isAccordion         = section.toLowerCase() === "accordion"         ? true : false;
            $scope.isCarousel          = section.toLowerCase() === "carousel"          ? true : false;
            $scope.isModal             = section.toLowerCase() === "modal"             ? true : false;
            $scope.isOverlay           = section.toLowerCase() === "overlay"           ? true : false;
            $scope.isTable             = section.toLowerCase() === "table"             ? true : false;
            $scope.isFile              = section.toLowerCase() === "file"              ? true : false;
        }
    }
})();