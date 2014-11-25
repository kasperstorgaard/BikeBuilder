; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('SvgParts', function (DataCollection, utils, SvgPart, Path, LineGroup) {
            function SVGParts() {
                DataCollection.apply(this, arguments);
            }

            var base = DataCollection.prototype;
            SVGParts.prototype = new DataCollection();
            SVGParts.prototype.add = addSvgClass;

            utils.inherit(Path, SvgPart);
            utils.inherit(LineGroup, SvgPart);

            var classes = { Path: Path, LineGroup: LineGroup };

            return new SVGParts({ items: {}, isAsync: false });

            //---------------------------------------------------------------------------------//

            function addSvgClass(key, props) {
                if (!props.data) {
                    return null;
                }

                var Class = getSvgClass(props.type);
                if (!Class) {
                    return null;
                }

                return base.add.apply(this, [key, new Class(key, props)]);
            }

            function getSvgClass(key) {
                return classes[key] || null;
            }
        });
})();