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
                template: '<g id={{model.key}} ng-click="handleClicked(model.key)" ng-class="[model.color, model.key, model.active ? \'active\' : \'\']">' +
                    '<line svg-line ng-repeat="line in model.lines" model="line" />' +
                '</g>',
                link: function(scope) {
                    scope.handleClicked = function (key) {
                        scope.$emit('svgPart:clicked', key);
                    };
                }
            };
        });
})();