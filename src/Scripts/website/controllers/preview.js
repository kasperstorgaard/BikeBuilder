; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('PreviewCtrl', function (svgParts) {
            var ctrl = this;

            ctrl.getPart = svgParts.getPart;
        });
})();