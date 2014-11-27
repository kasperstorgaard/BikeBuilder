; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('ShowSpinnerCtrl', function ($compile, $scope, $templateCache) {
            var ctrl = this;

            ctrl.getBool = getBool;
            ctrl.getSpinnerElement = getSpinnerElement;

            //---------------------------------------------//

            function getBool(attr) {
                return !_.isUndefined(attr) && attr.toString().toLowerCase() === 'true';
            }

            function getSpinnerElement() {
                var tpl = $templateCache.get('spinner.tpl.html');
                var linkFn = $compile(tpl);
                return linkFn($scope);
            }
        });
})();