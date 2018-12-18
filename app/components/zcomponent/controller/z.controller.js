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