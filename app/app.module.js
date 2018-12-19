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