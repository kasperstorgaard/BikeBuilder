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
                template: '<polygon id={{model.key}} fill="none" ng-class="[model.color, model.key]" ng-attr-points="{{model.svgData}}" />'
            };
        });
})();