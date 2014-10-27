; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('scroll', function (Bindable) {
            var base = new Bindable();
            base.onAttach = attachScroll;
            base.onDetach = detachScroll;

            var SCROLL_THROTTLE = 100;
            var throttledHandleScroll;

            return {
                'bind': base.bind
            };

            //---------------------------------------------------------------------------------//

            function attachScroll() {
                throttledHandleScroll = _.throttle(handleScroll, SCROLL_THROTTLE);
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

                base.invoke(scrollTop);
            }
        });
})();