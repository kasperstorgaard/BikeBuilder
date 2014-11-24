; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('part', function () {
            return {
                restrict: 'A',
                scope: {
                    'model': '=part',
                    'sectionName': '='
                },
                replace: true,
                templateUrl: 'part.tpl.html',
                link: function(scope, element, attrs) {
                    scope.updateSelectedPart = updateSelectedPart;
                    scope.selectedVariant = angular.copy(scope.model.variants[0]);
                    scope.setSelectedVariant = setSelectedVariant;

                    //-----------------------------------------------//
                    function updateSelectedPart() {
                        scope.$emit('part:selected', scope.sectionName, scope.model, scope.selectedVariant);
                    }

                    function setSelectedVariant(variant) {
                        scope.selectedVariant = variant;
                        if (scope.model.selected) {
                            updateSelected();
                        }
                    }
                }
            };
        });
})();

