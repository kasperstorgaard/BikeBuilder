; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('scrollPush', function (scroll) {
            return {
                restrict: 'A',
                scope: true,
                link: function (scope) {
                    var pushHeight;

                    scroll.bind(updateHeight);

                    function updateHeight(scrollTop) {
                        pushHeight = scrollTop;
                        scope.heightStyle = { 'height': scrollTop };
                        scope.$apply();
                    }
                }
            };
        });
})();

