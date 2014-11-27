; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('PreviewCtrl', function (SvgParts, DataCollection, $scope) {
            var ctrl = this;
            ctrl.getPart = getPart;
            ctrl.dataFetched = dataFetched;
            ctrl.updateActiveSvgPart = updateActiveSvgPart;

            $scope.$on('svgPart:clicked', updateActiveSvgPart);

            ctrl.dataCollection = new DataCollection({ filePath: 'scripts/svgdata.json', isAsync: true });

            ctrl.dataCollection.fetch().then(dataFetched);

            //--------------------------------------------//

            function getPart(key) {
                if (!ctrl.SvgDataReady) {
                    return {};
                }
                return SvgParts.getOne(key);
            }

            function dataFetched() {
                _.forEach(ctrl.dataCollection.getAll(), function (svgDataPart, key) {
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