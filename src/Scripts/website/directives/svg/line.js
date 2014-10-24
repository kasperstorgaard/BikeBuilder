; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgLine', function (SvgAnimationDirective) {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    'color': '=',
                    'data': '=lineData'
                },
                templateNamespace: 'svg',
                templateUrl: 'line.tpl.html',
                link: function (scope, element) {
                    var el = element[0];
                    var base = new SvgAnimationDirective(el, 'line', { msPrUnit: 20, data: scope.data});

                    scope.$on('svgRootLoaded', loadAnimation);
                    scope.$watch('color', updateColor);
                    
                    //-----------------------------------------------//

                    function loadAnimation() {
                        scope.pathLength = base.getLength();
                        scope.style = base.getStyle(scope.color, true);
                        scope.$apply();
                    }

                    function updateColor() {
                        scope.style = base.getStyle(scope.color, false);
                    }
                }
            };
        });
})();

