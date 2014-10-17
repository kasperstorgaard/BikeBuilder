; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgPath', function () {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    'model': '='
                },
                templateNamespace: 'svg',
                template: '<path id={{model.key}} fill="none" ng-class="[model.color, model.key]" ng-style="animationStyle" ng-attr-stroke-dasharray="{{pathLength}}" ng-attr-stroke-dashoffset="{{pathLength}}" ng-attr-d="{{model.data}}" />',
                link: function (scope, element) {
                    var el = element[0];
                    scope.$on('svgRootLoaded', setPathLength);

                    function setPathLength() {
                        if (el.getTotalLength) {
                            var length = el.getTotalLength();
                            scope.pathLength = length;

                            var BASE_LENGTH = 1200;
                            var BASE_DURATION = 5;

                            var duration = (Math.min(length / BASE_LENGTH, 1)) * BASE_DURATION;

                            scope.animationStyle = {
                                '-webkit-animation': 'dash '+duration+'s linear forwards',
                                'animation': 'dash '+duration+'s linear forwards'
                            };

                            scope.$apply();
                        }
                    }                    
                }

            }
        });
})();