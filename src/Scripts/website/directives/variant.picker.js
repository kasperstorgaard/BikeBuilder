; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('variantPicker', function () {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    variants: '=variantPicker',
                    selectedVariant: '=',
                    basePartImgUrl: '@'
                },
                templateUrl: 'variant.picker.tpl.html'
            };
        });
})();

