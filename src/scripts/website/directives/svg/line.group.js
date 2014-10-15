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
                '<line fill="none" ng-repeat="line in model.lines" ng-attr-x1="{{line.data[0]}}" ng-attr-y1="{{line.data[1]}}" ng-attr-x2="{{line.data[2]}}" ng-attr-y2="{{line.data[3]}}" />' +
            '</g>'
    };
        });
})();