; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('PreviewCtrl', function (SvgParts) {
            var ctrl = this;
            ctrl.getPart = SvgParts.getOne;

            SvgParts.setupPartData();
        });
})();