(function() {
    'use strict';

    angular.module('sandbox.module')
        .controller('ComponenteController', ComponenteController);

    function ComponenteController($scope) {

        function init() {

        }
        init();
    }
})();
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