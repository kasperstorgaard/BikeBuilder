; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('SvgParts', function (DataCollection, utils, SvgPart, Path, LineGroup) {
            function SVGParts() {
                DataCollection.apply(this, arguments);
            }
            SVGParts.prototype = new DataCollection();
            SVGParts.prototype.processData = addSvgClasses;
            SVGParts.prototype.add = addSvgClass;

            utils.inherit(Path, SvgPart);
            utils.inherit(LineGroup, SvgPart);

            var classes = { Path: Path, LineGroup: LineGroup };

            return new SVGParts('scripts/svgdata.json');

            //---------------------------------------------------------------------------------//

            function addSvgClasses(data) {
                var self = this;
                _.each(data, function (dataInstance, key) {
                    self.add(key, dataInstance);
                });
                return this.items;
            }

            function addSvgClass(key, props) {
                if (!this.fetched) {
                    return null;
                }

                if (!key || !props.type || !props.data) {
                    return null;
                }
                var existing = this.getOne(key);
                if (existing) {
                    return null;
                }

                var Class = getClass(props.type);
                if (!Class) {
                    return null;
                }

                this.items[key] = new Class(key, props);
                return this.items;
            }

            function getClass(key) {
                return classes[key] || null;
            }
        });
})();