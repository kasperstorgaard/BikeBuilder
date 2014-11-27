; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('ScrollBindCtrl', function ($q, $scope, scroll) {
            var ctrl = this;

            ctrl.bindToScroll = bindToScroll;
            ctrl.bindUpdateValsToScroll = bindUpdateValsToScroll;

            //------------------------------------------//

            function bindToScroll(callback) {
                scroll.bind(callback);
            }

            function bindUpdateValsToScroll(updateScopeVals) {
                if (!_.isString(updateScopeVals)) {
                    return null;
                }
                try {
                    var json = JSON.parse(updateScopeVals);
                    bindValuesToScroll(json);
                } catch (e) {
                    bindValuesToScroll([updateScopeVals]);
                }
            }

            function bindValuesToScroll(scopeKeysToUpdate) {
                if (scopeKeysToUpdate.length === 0) {
                    return;
                }
                var updateValuesFn = getUpdateValuesFn(scopeKeysToUpdate);
                scroll.bind(updateValuesFn);
            }

            function getUpdateValuesFn(scopeKeysToUpdate) {
                return function updateValues(scrollTop) {
                    _.each(scopeKeysToUpdate, function (scopeKey) {
                        $scope[scopeKey] = scrollTop;
                    });
                    $scope.$apply();
                }
            }
        });
})();