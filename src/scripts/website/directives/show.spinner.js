; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('showSpinner', function () {
            return {
                restrict: 'A',
                scope: { showSpinner: '@' },
                link: function (scope) {
                    var isLoaded = !_.isUndefined(scope.showSpinner) && scope.showSpinner.toString().toLowerCase() === 'true';
                    if (isLoaded === true) {
                        return;
                    }

                    var insertedEl;
                }
            };
        });
})();