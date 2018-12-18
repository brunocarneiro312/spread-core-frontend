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

        function init()
        {
            if ($scope.debug)
            {
                $scope.itens.push('menu1', 'menu2', 'menu3');
            }
        }
        init();

        function toggle(listItem)
        {
            $scope.selectedElement = listItem;
        }

        function isSelected(listItem)
        {
            return $scope.selectedElement === listItem;
        }

        function debug()
        {
            console.log('OK');
        }
    }
})();
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
(function() {
    'use strict';

    angular.module('spread.table.module')
        .controller('SpreadTableController', SpreadTableController);

    function SpreadTableController($scope)
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
(function() {
    'use strict';

    angular.module('spread.modal.module')
        .controller('SpreadModalController', SpreadModalController);

    function SpreadModalController($scope)
    {
        function init()
        {

        }
        init();
    }

})();