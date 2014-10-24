; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('FlowCtrl', function ($scope, Parts, SvgParts) {
            var IMAGE_ROOT = 'content/images/';
            var ctrl = this;

            $scope.$on('part:clicked', updateSvgPart);

            Parts.fetchData().then(partDataFetched);

            //-----------------------------------//

            function partDataFetched(data) {
                ctrl.partData = data;
            }

            function updateSvgPart(event, part, selectedVariant) {
                if (selectedVariant.colors) {
                    _.forEach(selectedVariant.colors, function (value, key) {
                        SvgParts.updateOne(key, { color: value });
                    });
                }
            }
        });
})();