; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('SummaryCtrl', function ($scope, Parts) {
            var ctrl = this;

            Parts.fetch().then(partDataFetched);

            //--------------------------------------//

            function partDataFetched() {
                
            }
        });
})();