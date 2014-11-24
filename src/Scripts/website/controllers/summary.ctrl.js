; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('SummaryCtrl', function ($scope, Parts) {
            var ctrl = this;

            ctrl.selectedPartSections = {};

            Parts.fetch().then(partDataFetched);

            $scope.$on('update:selected', updateSelectedParts);

            //--------------------------------------//

            function partDataFetched(data) {
                ctrl.partSections = data;
            }

            function updateSelectedParts(event, sectionName, selectedPart, selectedVariant) {
                ctrl.selectedPartSections[sectionName] = { selectedPart: selectedPart, selectedVariant: selectedVariant };
            }
        });
})();