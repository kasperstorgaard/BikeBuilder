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
                    scope.getStyle = getStyle;

                    //-----------------------------------------------//

                    function getStyle() {
                        return {
                            '-webkit-animation': scope.animation,
                            'animation': scope.animation,
                            'stroke': scope.model.color
                        };
                    }

                    function loadAnimation() {
                        var el = element[0];
                        var base = new SvgAnimationDirective(el, 'line', {
                            msPrUnit: 20,
                            maxMs: 2000,
                            data: scope.model.data
                        });

                        scope.pathLength = base.getLength();
                        scope.animationDuration = base.getDuration(scope.pathLength);
                        scope.animation = base.getAnimation(scope.animationDuration, false);
                        scope.$apply();
                    }
                }
            };
        });
})();

