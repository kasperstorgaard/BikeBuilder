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
                        
                        var BASE_LENGTH = 100;
                        var BASE_DURATION = 2;

                        var duration = (Math.min(length / BASE_LENGTH, 1)) * BASE_DURATION;

                        scope.animationStyle = {
                            '-webkit-animation': 'dash ' + duration + 's linear forwards',
                            'animation': 'dash ' + duration + 's linear forwards'
                        };

                        scope.$apply();
                    }
                }
            };
        });
})();

