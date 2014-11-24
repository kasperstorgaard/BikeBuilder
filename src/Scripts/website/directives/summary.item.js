; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('summaryItem', function () {
            return {
                restrict: 'A',
                scope: {
                    'selectedPart': '=summaryItem',
                    'sectionName': '=',
                    'selectedVariant': '='
                },
                replace: true,
                templateUrl: 'summary.item.tpl.html'
            };
        });
})();

