; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgLineGroup', function () {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    'model': '='
                },
                templateNamespace: 'svg',
                templateUrl: 'line.group.tpl.html',
                link: function (scope) {
                    scope.handleClicked = function (key) {
                        scope.$emit('svgPart:clicked', key);
                    };
                }
            };
        });
})();