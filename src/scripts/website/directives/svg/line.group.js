; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgLineGroup', function () {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    'model': '='
                },
                templateNamespace: 'svg',
                template: '<g id={{model.key}} ng-class="[model.color, model.key]">' +
                    '<line svg-line ng-repeat="line in model.lines" model="line" />' +
                '</g>'
            };
        });
})();