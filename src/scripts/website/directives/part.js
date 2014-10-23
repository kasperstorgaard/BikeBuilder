; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('part', function () {
            return {
                restrict: 'A',
                scope: {
                    'model': '=part'
                },
                replace: true,
                templateUrl: 'part.tpl.html',
                link: function (scope) {
                }
            };
        });
})();

