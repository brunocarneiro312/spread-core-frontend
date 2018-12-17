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
(function() {
    'use strict';

    angular.module('sandbox.module')
        .controller('InterfaceController');

    function InterfaceController($scope)
    {
        function init()
        {

        }
        init();
    }
})();
(function () {
    'use strict';

    angular.module('z.module')
        .controller('ZController', ZController);

    function ZController($scope)
    {
        function init()
        {
            console.log('----');
            console.log('init');
            console.log('----');
        }
        init();
    }
})();