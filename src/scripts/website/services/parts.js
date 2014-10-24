; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('Parts', function ($q, $http) {
            var JSON_FILE_PATH = 'scripts/partdata.json';
            var parts = {},
                dataFetched;

            var exports = {
                fetchData: fetchData
            };
            return exports;

            //---------------------------------------------------------------------------------//

            function fetchData() {
                var dfd = $q.defer();
                $http.get(JSON_FILE_PATH).success(function (data) {
                    dataFetched = true;
                    processData(data);
                    dfd.resolve(parts);
                });
                return dfd.promise;
            }

            function processData(data) {
                parts = data;
            }
        });
})();