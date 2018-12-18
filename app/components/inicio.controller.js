(function() {
    'use strict';

    angular.module('sandbox.module')
        .controller('InicioController', InicioController);

    function InicioController($scope, $timeout)
    {
        // Variáveis
        $scope.showView             = undefined;
        $scope.isSobre              = undefined;
        $scope.isComoUtilizar       = undefined;
        $scope.isCriandoComponentes = undefined;
        $scope.onload               = true;

        // Funções
        $scope.copy = copy;

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

        /**
         * ------------------------------------------
         * Copia para o clipboard o texto do elemento
         * ------------------------------------------
         * @param id: id do componente
         */
        function copy(id)
        {
            var copyText = document.getElementById(id);
            var textarea = document.createElement("textarea");
            textarea.value = copyText.textContent;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            textarea.remove();
            alert('texto copiado!');
        }
    }
})();