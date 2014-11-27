; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('scroll', function (Bindable) {
            function Scroll() {
                Bindable.apply(this, arguments);
            }
            Scroll.prototype = new Bindable();

            Scroll.prototype.onAttach = attachScroll;
            Scroll.prototype.onDetach = detachScroll;
            Scroll.prototype.getScrollTop = getScrollTop;
            Scroll.prototype.handleScroll = handleScroll;


            var SCROLL_THROTTLE = 100;
            var throttledHandleScroll;

            return new Scroll();

            //---------------------------------------------------------------------------------//

            function attachScroll() {
                var self = this;
                throttledHandleScroll = _.throttle(function() {
                    self.handleScroll();
                }, SCROLL_THROTTLE);
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
                this.invoke(this.getScrollTop());
            }
        });
})();