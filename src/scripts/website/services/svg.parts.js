; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('SvgParts', function ($q, $timeout, $http, utils, SvgPart, Path, LineGroup) {
            var JSON_FILE_PATH = 'scripts/svgdata.json';
            var parts = {},
            dataFetched = false;

            utils.inherit(Path, SvgPart);
            utils.inherit(LineGroup, SvgPart);

            var classes = { Path: Path, LineGroup: LineGroup };

            var exports = {
                fetchData: fetchData,
                getOne: getOne,
                getAll: getAll,
                updateOne: updateOne,
                updateAll: updateAll,
                add: add
            };
            return exports;

            //---------------------------------------------------------------------------------//

            function fetchData() {
                var dfd = $q.defer();
                $timeout(function () {
                    $http.get(JSON_FILE_PATH).success(function (data) {
                        dataFetched = true;
                        processData(data);
                        dfd.resolve(parts);
                    });
                }, 30);
                return dfd.promise;
            }

            function processData(data) {
                _.forEach(data, function (dataInstance, key) {
                    add(key, dataInstance);
                });
            }

            function add(key, props) {
                if (!dataFetched) {
                    return null;
                }

                if (!key || !props.type || !props.data) {
                    return null;
                }
                var existingPart = getOne(key);
                if (existingPart) {
                    return null;
                }

                var Class = getClass(props.type);
                if (!Class) {
                    return null;
                }

                parts[key] = new Class(key, props);
                return parts;
            }

            function getClass(key) {
                return classes[key] || null;
            }

            function getOne(key) {
                if (!dataFetched) {
                    return null;
                }
                var part = parts[key];
                if (part) {
                    return part;
                }
                return null;
            }

            function getAll() {
                if (!dataFetched) {
                    return null;
                }
                return parts;
            }

            function updateOne(key, props) {
                if (!dataFetched) {
                    return null;
                }
                var part = getOne(key);
                if (!part) {
                    return null;
                }

                return _.assign(part, props);
            }

            function updateAll(props) {
                if (!dataFetched) {
                    return null;
                }
                _.each(parts, function (part) {
                    _.assign(part, props);
                });
                return parts;
            }
        });
})();