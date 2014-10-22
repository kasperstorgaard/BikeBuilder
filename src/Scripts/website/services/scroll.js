; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('scroll', function (Bindable) {
            var self = this;

            _.assign(self, _.assign(new Bindable(), {
                onAttach: attachScroll,
                onDetach: detachScroll
            }));

            var throttledHandleScroll;

            return {
                'bind': self.bind
            };

            //---------------------------------------------------------------------------------//

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

                self.invoke(scrollTop);
            }
        });
})();