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
                    var el = element[0];
                    var base = new SvgAnimationDirective(el, 'line', {
                        msPrUnit: 20,
                        maxMs: 2000,
                        data: scope.model.data
                    });

                    scope.$on('svgRootLoaded', loadAnimation);

                    function loadAnimation() {
                        scope.animationReady = true;
                        scope.pathLength = base.getLength();
                        scope.animationDuration = base.getDuration(scope.pathLength);
                        scope.animationStyle = base.getStyleObj(scope.animationDuration, false);
                        scope.$apply();
                    }
                }
            };
        });
})();

