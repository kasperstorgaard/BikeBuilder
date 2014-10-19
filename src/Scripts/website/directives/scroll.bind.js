; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('scrollBind', function ($q, scroll) {
            return {
                restrict: 'A',
                scope: true,
                link: function (scope, element, attrs) {
                    var callback;
                    if (_.isFunction(attrs.scollBind)) {
                        callback = attrs.scrollBind;
                        scroll.bind(callback);
                        return;
                    }

                    if (!attrs.updateScopeVals) {
                        return;
                    }
                    var updateScopeVals = attrs.updateScopeVals.replace(/'/gi, '"');

                    try {
                        var json = JSON.parse(updateScopeVals);
                        bindValuesToScroll(json);
                    } catch (e) {
                        bindValuesToScroll([updateScopeVals]);
                    }

                    function bindValuesToScroll(scopeKeysToUpdate) {
                        if (scopeKeysToUpdate.length === 0) {
                            return;
                        }
                        scroll.bind(getUpdateValuesFn(scopeKeysToUpdate));
                    }

                    function getUpdateValuesFn(scopeKeysToUpdate) {
                        return function updateValues(scrollTop) {
                            _.forEach(scopeKeysToUpdate, function (scopeKey) {
                                scope[scopeKey] = scrollTop;
                            });
                            scope.$apply();
                        }
                    }
                }
            };
        });
})();

