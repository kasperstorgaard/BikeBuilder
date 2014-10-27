; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('FlowCtrl', function ($scope, Parts, SvgParts) {
            var ctrl = this;

            $scope.$on('part:selected', updateSvgPart);

            Parts.fetch().then(partDataFetched);

            //-----------------------------------//

            function partDataFetched(data) {
                ctrl.partData = data;
            }

            function updateSvgPart(event, part, selectedVariant) {
                if (selectedVariant.colors) {
                    _.each(selectedVariant.colors, function (value, key) {
                        SvgParts.updateOne(key, { color: value });
                    });
                }
            }
        });
})();