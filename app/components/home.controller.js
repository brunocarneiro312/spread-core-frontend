(function() {
    'use strict';

    angular.module('sandbox.module')
        .controller('HomeController', HomeController);

    function HomeController($scope)
    {
        // Variáveis
        $scope.showView             = undefined;
        $scope.isSobre              = undefined;
        $scope.isComoUtilizar       = undefined;
        $scope.isCriandoComponentes = undefined;
        $scope.onload               = true;

        // Funções
        $scope.display = display;

        function init()
        {
            $scope.isSobre = true;
        }
        init();

        function display(section)
        {
            $scope.isSobre             = false;
            $scope.isComoUtilizar      = false;
            $scope.isCriandoComponente = false;

            if (section.toLowerCase() === 'sobre')
            {
                $scope.isSobre = true;
            }
            if (section.toLowerCase() === 'comoutilizar')
            {
                $scope.isComoUtilizar = true;
            }
            if (section.toLowerCase() === 'criandocomponente')
            {
                $scope.isCriandoComponente = true;
            }
        }
    }
})();