; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgLine', function (SvgAnimationDirective) {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    'model': '='
                },
                templateNamespace: 'svg',
                templateUrl: 'line.tpl.html',
                link: function (scope, element) {

                    scope.$on('svgRootLoaded', loadAnimation);

                    //-----------------------------------------------//

                    function loadAnimation() {
                        var el = element[0];
                        var base = new SvgAnimationDirective(el, 'line', {
                            msPrUnit: 20,
                            data: scope.model.data
                        });

                        scope.pathLength = base.getLength();
                        scope.animationStyle = base.getStyle(scope.model.color, true);
                        scope.$apply();
                    }
                }
            };
        });
})();

