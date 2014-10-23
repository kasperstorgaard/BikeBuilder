; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('variantPicker', function () {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    variants: '=variantPicker',
                    selectedVariant: '='
                },
                templateUrl: 'variant.picker.tpl.html',
                link: function (scope) {
                    scope.setSelectedVariant = setSelectedVariant;

                    function setSelectedVariant(variant) {
                        scope.selectedVariant = variant;
                    }
                }
            };
        });
})();

