; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('PreviewCtrl', function (SvgParts, $scope) {
            var ctrl = this;
            ctrl.getPart = getPart;

            $scope.$on('svgPart:clicked', updateActiveSvgPart);

            SvgParts.fetchData().then(dataFetched);

            //--------------------------------------------//

            function getPart(key) {
                if (!ctrl.SvgDataReady) {
                    return {};
                }
                return SvgParts.getOne(key);
            }

            function dataFetched() {
                ctrl.SvgDataReady = true;
            }

            function updateActiveSvgPart(event, key) {
                SvgParts.updateAll({ active: false });
                SvgParts.updateOne(key, { active: true });
            }
        });
})();