; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('SvgAnimationDirective', function () {
            return function AnimationPart(el, type, options) {
                var self = this;
                options = options || {};

                this.el = el;
                this.type = type;
                this.data = options.data || {};

                this.msPrUnit = options.msPrUnit || 4.16;
                this.maxMs = options.maxMs || 5000;
                

                this.getStyleObj = function setAnimationStyle(duration, shouldRepeat) {
                    var repeat = shouldRepeat ? 'infinite' : 'forwards';
                    var animation = 'dash ' + duration + ' linear ' + repeat;
                    return {
                        '-webkit-animation': animation,
                        'animation': animation
                    };
                }

                this.getDuration = function (length) {
                    return Math.min(length * this.msPrUnit, this.maxMs) + 'ms';
                }

                this.getLength = function () {
                    switch (this.type) {
                        case 'path':
                            return getPathLength();
                        case 'line':
                            return getLineLength();
                        default:
                            return null;
                    }
                }

                function getPathLength() {
                    return self.el.getTotalLength();
                }

                function getLineLength() {
                    var x = Math.abs(self.data[0] - self.data[2]);
                    var y = Math.abs(self.data[1] - self.data[3]);
                    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                }
            }
        });
})();