; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('showSpinner', function () {
            var idPostFix = 0;

            return {
                restrict: 'A',
                scope: true,
                priority: 1,
                controller: 'ShowSpinnerCtrl',
                link: function (scope, element, attrs, ctrl) {
                    //svg's need unique ids, so we need to give i an index base postfix
                    scope.spinnerKeyPostFix = idPostFix;
                    idPostFix++;
                }
            };
        });
})();