; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('FlowCtrl', function ($scope, $rootScope, Parts, SvgParts) {
            var ctrl = this;

            ctrl.partSelected = partSelected;
            ctrl.updateSvgPart = updateSvgPart;
            ctrl.partDataFetched = partDataFetched;

            $scope.$on('part:selected', ctrl.partSelected);
            Parts.fetch().then(ctrl.partDataFetched);

            //-----------------------------------//

            function partDataFetched(data) {
                ctrl.partSections = data;
                return ctrl;
            }

            function partSelected(event, sectionName, selectedPart, selectedVariant) {
                if (!event || !sectionName || !selectedPart || !selectedVariant) {
                    return null;
                }

                ctrl.updateSvgPart(selectedVariant);
                Parts.updateSelectedPart(sectionName, selectedPart);
                $rootScope.$broadcast('update:selected', sectionName, selectedPart, selectedVariant);
                return ctrl;
            }

            function updateSvgPart(selectedVariant) {
                if (!selectedVariant || !selectedVariant.colors) {
                    return null;
                }

                _.each(selectedVariant.colors, function (value, key) {
                    SvgParts.updateOne(key, { color: value });
                });

                return ctrl;
            }
        });
})();