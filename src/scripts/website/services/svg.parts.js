; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('SvgParts', function (DataCollection, utils, SvgPart, Path, LineGroup) {
            var JSON_FILE_PATH = 'scripts/svgdata.json';
            var base = new DataCollection(JSON_FILE_PATH);
            base.processData = addSvgClasses;
            base.add = addSvgClass;

            utils.inherit(Path, SvgPart);
            utils.inherit(LineGroup, SvgPart);

            var classes = { Path: Path, LineGroup: LineGroup };

            return {
                fetch: base.fetch,
                getOne: base.getOne,
                getAll: base.getAll,
                updateOne: base.updateOne,
                updateAll: base.updateAll,
                add: base.add
            };

            //---------------------------------------------------------------------------------//

            function addSvgClasses(data) {
                _.each(data, function (dataInstance, key) {
                    base.add(key, dataInstance);
                });
                return base.items;
            }

            function addSvgClass(key, props) {
                if (!base.fetched) {
                    return null;
                }

                if (!key || !props.type || !props.data) {
                    return null;
                }
                var existing = base.getOne(key);
                if (existing) {
                    return null;
                }

                var Class = getClass(props.type);
                if (!Class) {
                    return null;
                }

                base.items[key] = new Class(key, props);
                return base.items;
            }

            function getClass(key) {
                return classes[key] || null;
            }
        });
})();