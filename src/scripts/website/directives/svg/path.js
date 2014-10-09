; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgPath', function () {
            return {
                restrict: 'A',
                scope: true,
                link: function (scope, element, attrs) {
                    var getAttrStr = function (type) {
                        var value = attrs[type];
                        if (!value) {
                            return null;
                        }

                        return type + '-' + value;
                    };

                    scope.getClass = function () {
                        var stroke = getAttrStr('stroke');
                        var fill = getAttrStr('fill');
                        if (stroke && fill) {
                            return stroke + ' ' + fill;
                        }
                        return fill || stroke || '';
                    };
                }
            }
        });
})();