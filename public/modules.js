(function() {
    'use strict';

    angular.module('sandbox.module', [

        // Vendors
        'ngRoute',
        'ngAnimate',

        // App
        'spread.accordion.module',
        'spread.overlay.module',

    ]).config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'views/inicio.html',
                controller: 'InicioController'
            })
            .when("/componentes", {
                templateUrl: 'views/componentes.html',
                controller: 'ComponenteController'
            })
            .otherwise('/');
    });

})();
(function() {
    'use strict';

    angular.module('spread.accordion.module', [

    ]);

})();
(function() {
    'use strict';

    angular.module('spread.carousel.module', [

    ]);

})();
(function() {
    'use strict';

    angular.module('spread.modal.module', [

    ]);
    
})();
(function() {
    'use strict';

    angular.module('spread.overlay.module', [

    ]);

})();
(function() {
    'use strict';

    angular.module('spread.table.module', [

    ]);

})();
(function() {
    'use strict';

    angular.module('z.module', [

    ]);

})();