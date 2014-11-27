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
                    var showSpinner = ctrl.getBool(attrs.showSpinner);
                    if (showSpinner === false) {
                        return;
                    }

                    scope.spinnerKeyPostFix = idPostFix;
                    idPostFix++;

                    var spinnerElement = ctrl.getSpinnerElement();

                    var parentEl = element[0].parentNode;
                    parentEl.insertBefore(spinnerElement[0], element[0]);

                    var removeObserve = attrs.$observe('showSpinner', function(val) {
                        if (!ctrl.getBool(val)) {
                            spinnerElement.remove();
                            removeObserve();
                        }
                    });
                }
            };
        });
})();