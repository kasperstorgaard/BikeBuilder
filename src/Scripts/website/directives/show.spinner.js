; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('showSpinner', function ($templateCache, $compile) {
            var idPostFix = 0;

            return {
                restrict: 'A',
                scope: true,
                priority: 1,
                link: function (scope, element, attrs) {
                    var showSpinner = getBool(attrs.showSpinner);
                    if (showSpinner === false) {
                        return;
                    }

                    scope.spinnerKeyPostFix = idPostFix;
                    idPostFix++;

                    var spinnerElement = getSpinnerElement();
                    insertBeforeElement(spinnerElement[0], element[0]);

                    var removeObserve = attrs.$observe('showSpinner', function(val) {
                        if (!getBool(val)) {
                            removeElement(spinnerElement);
                            removeObserve();
                        }
                    });

                    //---------------------------------------------//

                    function getBool(attr) {
                        return !_.isUndefined(attr) && attr.toString().toLowerCase() === 'true';
                    }

                    function getSpinnerElement() {
                        var tpl = $templateCache.get('spinner.tpl.html');
                        var linkFn = $compile(tpl);
                        return linkFn(scope);
                    }

                    function insertBeforeElement(insertEl, siblingEl) {
                        var parentEl = siblingEl.parentNode;
                        parentEl.insertBefore(insertEl, siblingEl);
                    }

                    function removeElement(el) {
                        el.remove();
                    }
                }
            };
        });
})();