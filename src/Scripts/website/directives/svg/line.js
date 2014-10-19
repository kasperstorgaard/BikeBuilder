; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgLine', function () {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    'model': '='
                },
                templateNamespace: 'svg',
                template: '<line fill="none" ng-class="[model.key, model.type]" ng-style="animationStyle" ng-attr-x1="{{model.data[0]}}" ng-attr-y1="{{model.data[1]}}" ng-attr-x2="{{model.data[2]}}" ng-attr-y2="{{model.data[3]}}" ' +
                    'ng-attr-stroke-dasharray="{{pathLength}}" ng-attr-stroke-dashoffset="{{pathLength}}" />',
                link: function(scope) {
                    scope.$on('svgRootLoaded', setPathLength);

                    function setPathLength() {
                        var x = Math.abs(scope.model.data[0] - scope.model.data[2]);
                        var y = Math.abs(scope.model.data[1] - scope.model.data[3]);
                        var length = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                        scope.pathLength = length;

                        var SECONDS_PER_UNIT = 0.02;
                        var MAX_SECONDS = 2;

                        var duration = Math.min(length * SECONDS_PER_UNIT, MAX_SECONDS);

                        var animation = 'dash ' + duration + 's linear forwards';
                        scope.animationStyle = {
                            '-webkit-animation': animation,
                            'animation': animation
                        };

                        scope.$apply();
                    }
                }
            };
        });
})();

