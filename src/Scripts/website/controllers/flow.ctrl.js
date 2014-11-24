; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('FlowCtrl', function ($scope, $rootScope, Parts, SvgParts) {
            var ctrl = this;

            $scope.$on('part:selected', partSelected);

            Parts.fetch().then(partDataFetched);

            //-----------------------------------//

            function partDataFetched(data) {
                ctrl.partSections = data;
            }

            function partSelected(event, sectionName, selectedPart, selectedVariant) {
                updateSvgPart(selectedVariant);
                Parts.updateSelectedPart(sectionName, selectedPart);
                $rootScope.$broadcast('update:selected', sectionName, selectedPart, selectedVariant);
            }

            function updateSvgPart(selectedVariant) {
                if (selectedVariant.colors) {
                    _.each(selectedVariant.colors, function (value, key) {
                        SvgParts.updateOne(key, { color: value });
                    });
                }
            }
        });
})();