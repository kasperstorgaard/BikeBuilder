; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('Parts', function (DataCollection) {
            var JSON_FILE_PATH = 'scripts/partdata.json';
            var base = new DataCollection(JSON_FILE_PATH;
            base.processData = processData;

            return {
                fetch: base.fetch,
                updateOne: base.updateOne
            };

            //---------------------------------------------------------------------------------//

            function processData(data) {
                return data;
            }
        });
})();