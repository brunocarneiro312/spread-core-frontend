(function() {
    'use strict';

    angular.module('sandbox.module')
        .controller('InicioController', InicioController);

    function InicioController($scope, $timeout) {

        // Variáveis
        $scope.isSobre              = true;
        $scope.isComoUtilizar       = undefined;
        $scope.isCriandoComponentes = undefined;

        // Funções
        $scope.copy = copy;

        function init() {
            $scope.isSobre = true;
        }
        init();

        /**
         * ------------------------------------------
         * Copia para o clipboard o texto do elemento
         * ------------------------------------------
         * @param id: id do componente
         */
        function copy(id) {
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