; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('PreviewCtrl', function (SvgParts, $scope) {
            var ctrl = this;
            ctrl.getPart = SvgParts.getOne;

            SvgParts.setupPartData();

            $scope.$on('svgPart:clicked', function (event, key) {
                SvgParts.updateAll({ active: false });
                SvgParts.updateOne(key, { active: true });
            });
        });
})();