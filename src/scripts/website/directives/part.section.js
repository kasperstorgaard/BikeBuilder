; (function () {
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
                templateUrl: 'part.section.tpl.html',
                link: function (scope) {
                    scope.getParts = getParts;

                    scope.$on('part:clicked', updateSelected);

                    //-----------------------------------------//

                    function updateSelected(event, selectedPart) {
                        _.forEach(scope.parts, function (part) {
                            part.selected = part.name == selectedPart.name;
                        });
                    }

                    function getParts() {
                        return scope.parts;
                    }
                }
            };
        });
})();

