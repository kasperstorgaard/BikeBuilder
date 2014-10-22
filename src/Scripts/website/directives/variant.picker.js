; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('variantPicker', function () {
            return {
                restrict: 'A',
                scope: {
                    variants: '=variantPicker'
                },
                templateUrl: 'variant.picker.tpl.html',
                link: function (scope) {
                    scope.setSelectedVariant = setSelectedVariant;
                    setSelectedVariant(scope.variants[0]);

                    function setSelectedVariant(variant) {
                        scope.selectedVariant = variant;
                    }
                }
            };
        });
})();

