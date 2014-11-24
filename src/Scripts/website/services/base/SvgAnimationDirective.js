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
                this.maxMs = options.maxMs || 10000;

                this.getAnimation = getAnimation;
                this.getDuration = getDuration;
                this.getLength = getLength;
                this.getStyle = getStyle;

                //----------------------------------------//

                function getLength() {
                    switch (self.type) {
                        case 'path':
                            return getPathLength();
                        case 'line':
                            return getLineLength();
                        default:
                            return null;
                    }
                }

                function getDuration(length) {
                    if (_.isUndefined(length)) {
                        length = getLength();
                    }

                    return Math.min(length * self.msPrUnit, self.maxMs) + 'ms';
                }

                function getAnimation(duration, shouldRepeat) {
                    if (_.isUndefined(duration)) {
                        duration = getDuration();
                    }

                    var repeat = shouldRepeat ? 'infinite' : '';
                    return 'dash ' + duration + ' linear forwards ' + repeat;
                }

                function getPathLength() {
                    return self.el.getTotalLength();
                }

                function getLineLength() {
                    var x = Math.abs(self.data[0] - self.data[2]);
                    var y = Math.abs(self.data[1] - self.data[3]);
                    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                }

                function getStyle(color, shouldAnimate) {
                    var style = {};
                    var colorAttr = type == 'line' ? 'stroke' : 'fill';
                    style[colorAttr] = color;

                    if (shouldAnimate) {
                        var animation = getAnimation(getDuration(getLength()), false);
                        style['-webkit-animation'] = animation;
                        style['animation'] = animation;
                    }

                    return style;
                }
            }
        });
})();