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

                    scope.$on('svgRootLoaded', loadAnimation);
                    scope.handleClicked = handleClicked;
                    scope.getStyle = getStyle;

                    //------------------------------------//

                    function handleClicked(key) {
                        scope.$emit('svgPart:clicked', key);
                    }

                    function getStyle() {
                        return {
                            '-webkit-animation': scope.animation,
                            'animation': scope.animation,
                            'fill': scope.model.color
                        };
                    }

                    function loadAnimation() {
                        var el = element[0];
                        var base = new SvgAnimationDirective(el, 'path', {data: scope.model.data});

                        scope.pathLength = base.getLength();
                        scope.animationDuration = base.getDuration(scope.pathLength);
                        scope.animation = base.getAnimation(scope.animationDuration, false);
                        scope.$apply();
                    }
                }

            }
        });
})();