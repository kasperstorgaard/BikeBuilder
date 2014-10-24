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
                    scope.handleClicked = handleClicked;
                    scope.selectedVariant = angular.copy(scope.model.variants[0]);
                    scope.setSelectedVariant = setSelectedVariant;

                    //-------------------------------//
                    function handleClicked() {
                        scope.$emit('part:clicked', scope.model, scope.selectedVariant);
                    }

                    function setSelectedVariant(variant) {
                        scope.selectedVariant = variant;
                    }
                }
            };
        });
})();

