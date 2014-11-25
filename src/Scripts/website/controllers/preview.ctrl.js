; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('PreviewCtrl', function (SvgParts, DataCollection, $scope) {
            var ctrl = this;
            ctrl.getPart = getPart;

            $scope.$on('svgPart:clicked', updateActiveSvgPart);

            var svgData = new DataCollection({ filePath: 'scripts/svgdata.json', isAsync: true });

            svgData.fetch().then(dataFetched);

            //--------------------------------------------//

            function getPart(key) {
                if (!ctrl.SvgDataReady) {
                    return {};
                }
                return SvgParts.getOne(key);
            }

            function dataFetched() {
                _.forEach(svgData.getAll(), function(svgDataPart, key) {
                    SvgParts.add(key, svgDataPart);
                });
                ctrl.SvgDataReady = true;
            }

            function updateActiveSvgPart(event, key) {
                SvgParts.updateAll({ selected: false });
                SvgParts.updateOne(key, { selected: true });
            }
        });
})();