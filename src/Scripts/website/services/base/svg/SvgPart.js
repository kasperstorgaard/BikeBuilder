; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('SvgPart', function () {
            return function SVGPart(key, props) {
                props = props || {};
                props.key = key;
                _.assign(this, props);
            }
        });
})();