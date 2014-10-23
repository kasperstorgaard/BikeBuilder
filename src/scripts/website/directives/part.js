; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('part', function () {
            return {
                restrict: 'A',
                scope: {
                    'name': '=part',
                    'type': '=',
                    'variants': '='
                },
                replace: true,
                templateUrl: 'part.tpl.html'
            };
        });
})();

