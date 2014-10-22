; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgPath', function (SvgAnimationDirective) {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    'model': '='
                },
                templateNamespace: 'svg',
                templateUrl: 'path.tpl.html',
                link: function (scope, element) {
                    var el = element[0];

                    var base = new SvgAnimationDirective(el, 'path');

                    if (scope.svgRootLoaded) {
                        loadAnimation();
                    } else {
                        scope.$on('svgRootLoaded', loadAnimation);
                    }

                    scope.handleClicked = function (key) {
                        scope.$emit('svgPart:clicked', key);
                    };

                    //------------------------------------//

                    function loadAnimation() {
                        scope.animationReady = true;
                        scope.pathLength = base.getLength();
                        scope.animationDuration = base.getDuration(scope.pathLength);
                        scope.animationStyle = base.getStyleObj(scope.animationDuration, false);
                        scope.$apply();
                    }
                }
            }
        });
})();