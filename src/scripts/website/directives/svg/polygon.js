; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgPolygon', function () {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    'model': '='
                },
                templateNamespace: 'svg',
                template: '<polygon id={{model.key}} fill="none" ng-click="handleClicked(model.key)" ng-class="[model.color, model.key, model.active ? \'active\' : \'\']" ng-attr-points="{{model.data}}" />',
                link: function (scope) {
                    scope.handleClicked = function (key) {
                        scope.$emit('svgPart:clicked', key);
                    };
                }
            };
        });
})();