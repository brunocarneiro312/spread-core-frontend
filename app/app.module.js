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