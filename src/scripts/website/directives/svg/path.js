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
                template: '<path id={{model.key}} fill="none" ng-class="[model.color, model.key]" ng-attr-d="{{model.svgData}}" />'
            };
        });
})();