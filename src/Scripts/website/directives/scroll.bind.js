; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('scrollBind', function () {
            return {
                restrict: 'A',
                scope: true,
                controller: 'ScrollBindCtrl',
                link: function (scope, element, attrs, ctrl) {
                    var callback;
                    if (_.isFunction(attrs.scollBind)) {
                        callback = attrs.scrollBind;
                        ctrl.bindToScroll(callback);
                        return;
                    }

                    if (!attrs.updateScopeVals) {
                        return;
                    }
                    var updateScopeVals = attrs.updateScopeVals.replace(/'/gi, '"');
                    if (updateScopeVals) {
                        ctrl.bindUpdateValsToScroll(updateScopeVals);
                    }
                }
            };
        });
})();

