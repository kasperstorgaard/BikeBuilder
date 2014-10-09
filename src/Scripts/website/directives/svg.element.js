; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgElement', function () {
            return {
                restrict: 'A',
                link: function (scope) {
                    scope.cssClass = 'teeeest';
                }
            };
        });
})();