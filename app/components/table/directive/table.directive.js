(function() {
    'use strict';

    angular.module('spread.table.module')
        .directive('spreadTable', spreadTable);

    function spreadTable()
    {
        return {
            template: '<h2>Table</h2>',
            scope: {

            }
        }
    }
})();