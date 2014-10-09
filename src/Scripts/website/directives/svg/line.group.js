; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgLineGroup', function () {
            return {
                restrict: 'A',
                scope: true,
                link: function (scope, element, attrs) {
                    scope.getClass = function() {
                        return ["test"];
                    };
                }
            }
        });
})();