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
                    var base = new SvgAnimationDirective(el, 'path', { data: scope.model.data });

                    scope.$on('svgRootLoaded', loadAnimation);
                    scope.handleClicked = handleClicked;
                    scope.$watch('model.color', updateColor);

                    //------------------------------------//

                    function handleClicked(key) {
                        scope.$emit('svgPart:clicked', key);
                    }

                    function loadAnimation() {
                        scope.pathLength = base.getLength();
                        scope.animationStyle = base.getStyle(scope.model.color, true);
                        scope.$apply();
                    }

                    function updateColor() {
                        scope.animationStyle = base.getStyle(scope.model.color, false);
                    }
                }

            }
        });
})();