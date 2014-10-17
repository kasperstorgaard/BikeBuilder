; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('scroll', function () {
            var callbacks = [],
                throttledHandleScroll;

            return {
                'bind': bind
            };

            //---------------------------------------------------------------------------------//

            function bind(callback) {
                callbacks.push(callback);
                var index = callbacks.length - 1;

                if (index === 0) {
                    attachScroll();
                }

                return function unbind() {
                    callbacks.splice(index, 1);
                    if (callbacks.length === 0) {
                        detachScroll();
                    }
                }
            }

            function attachScroll() {
                throttledHandleScroll = _.throttle(handleScroll, 100);
                window.addEventListener('scroll', throttledHandleScroll);
            }

            function detachScroll() {
                window.removeEventListener('scroll', throttledHandleScroll);
            }

            function getScrollTop() {
                var scrollTop = window.document.documentElement.scrollTop;
                if (scrollTop === 0) {
                    scrollTop = window.document.body.scrollTop;
                }
                return scrollTop;
            }

            function handleScroll() {
                var scrollTop = getScrollTop();
                
                _.forEach(callbacks, function (callback) {
                    callback.apply(null, [scrollTop]);
                });
            }
        });
})();