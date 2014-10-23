; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('partSection', function () {
            return {
                restrict: 'A',
                scope: {
                    'name': '@partSection',
                    'type': '@partType',
                    'parts': '='
                },
                replace: true,
                templateUrl: 'part.section.tpl.html',
                link: function (scope) {
                    scope.getParts = getParts;

                    function getParts() {
                        return scope.parts;
                    }
                }
            };
        });
})();

