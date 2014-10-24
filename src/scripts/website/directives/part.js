; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('part', function () {
            return {
                restrict: 'A',
                scope: {
                    'model': '=part'
                },
                replace: true,
                templateUrl: 'part.tpl.html',
                link: function(scope) {
                    scope.handleClicked = updateSelected;
                    scope.selectedVariant = angular.copy(scope.model.variants[0]);
                    scope.setSelectedVariant = setSelectedVariant;

                    //-------------------------------//
                    function updateSelected() {
                        scope.$emit('part:clicked', scope.model, scope.selectedVariant);
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

