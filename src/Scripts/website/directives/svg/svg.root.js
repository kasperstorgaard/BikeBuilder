; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgRoot', function () {
            return {
                restrict: 'A',
                scope: true,
                link: function (scope, element) {
                    var el = element[0];
                    el.addEventListener('load', function() {
                        scope.$broadcast('svgRootLoaded');
                        scope.svgRootLoaded = true;
                        scope.$apply();
                    });
                }
            }
        });
})();