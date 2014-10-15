; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('SvgParts', function (utils) {

            utils.inherit(Path, SVGPart);
            utils.inherit(LineGroup, SVGPart);

            var parts = {};
            var typeConstructors = { Path: Path, LineGroup: LineGroup };

            return {
                getPart: getPart,
                updatePart: updatePart,
                addPart: addPart
            };

            //---------------------------------------------------------------------------------//

            function addPart(key, props) {
                if (!key || !props.type || !props.data) {
                    return null;
                }
                var existingPart = getPart(key);
                if (existingPart) {
                    return null;
                }

                var constructor = getTypeConstructor(props.type);
                if (!constructor) {
                    return null;
                }

                parts[key] = new constructor(key, props);
                return parts;
            }

            function getTypeConstructor(key) {
                return typeConstructors[key] || null;
            }

            function getPart(key) {
                var part = parts[key];
                if (part) {
                    return part;
                }
                return null;
            }

            function updatePart(key, props) {
                var part = getPart(key);
                if (!part) {
                    return null;
                }

                return _.assign(part, props);
            }

            function SVGPart(key, props) {
                props = props || {};
                props.key = key;
                _.assign(this, props);
            }

            function Line(lineData) {
                this.data = lineData.split(',');
            }

            function LineGroup() {
                this.callSuperConstructor(this, arguments);
                this.color = 'black';

                var linesDataArr = this.data.split('|');
                this.lines = [];

                var self = this;
                _.forEach(linesDataArr, function (lineData) {
                    self.lines.push(new Line(lineData));
                });
            }

            function Path() {
                this.callSuperConstructor(this, arguments);
                this.color = 'transparent';
            }
        });
})();