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
                '<line fill="none" ng-repeat="line in model.lines" ng-attr-x1="{{line.svgData[0]}}" ng-attr-y1="{{line.svgData[1]}}" ng-attr-x2="{{line.svgData[2]}}" ng-attr-y2="{{line.svgData[3]}}" />' +
            '</g>'
    };
        });
})();