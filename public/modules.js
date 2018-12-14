(function() {
    'use strict';

    angular.module('sandbox.module', [
        'ngRoute',
        'ngAnimate'
    ]).config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'views/inicio.html',
                controller: 'HomeController'
            })
            .when("/componentes", {
                templateUrl: 'views/componentes.html',
                controller: 'HomeController'
            })
            .when("/interfaces", {
                templateUrl: 'views/interfaces.html',
                controller: 'HomeController'
            })
            .otherwise("/");
    });

})();
(function() {
    'use strict';

    angular.module('z.module', [

    ]);

})();