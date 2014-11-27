;(function () {
    'use strict';

    angular.module('bikeBuilder')
        .directive('partSection', function () {
            return {
                restrict: 'A',
                scope: {
                    'name': '=partSection',
                    'type': '=partType',
                    'parts': '='
                },
                replace: true,
                templateUrl: 'part.section.tpl.html'
            };
        });
})();

