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
                template: '<path id={{model.key}} fill="none" ng-click="handleClicked(model.key)" ng-class="[model.type, model.color, model.active ? \'active\' : \'\']" ng-style="animationStyle" ' +
                    'ng-attr-stroke-dasharray="{{pathLength}}" ng-attr-stroke-dashoffset="{{pathLength}}" ng-attr-d="{{model.data}}" />',
                link: function (scope, element) {
                    var el = element[0];
                    scope.$on('svgRootLoaded', setPathLength);

                    scope.handleClicked = function (key) {
                        scope.$emit('svgPart:clicked', key);
                    };

                    //------------------------------------//

                    function setPathLength() {
                        if (el.getTotalLength) {
                            var length = el.getTotalLength();
                            scope.pathLength = length;

                            var SECONDS_PER_UNIT = 0.00416;
                            var MAX_SECONDS = 5;

                            var duration = Math.min(length * SECONDS_PER_UNIT, MAX_SECONDS);

                            scope.animationStyle = {
                                '-webkit-animation': 'dash ' + duration + 's linear forwards',
                                'animation': 'dash ' + duration + 's linear forwards'
                            };

                            scope.$apply();
                        }
                    }                    
                }

            }
        });
})();