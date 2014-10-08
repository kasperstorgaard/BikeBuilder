; (function () {
    'use strict';
    angular.module('codehouse.bikebuilder')
        .directive('dummyDirective', function () {
            return {
                restrict: 'A',
                scope: true,
                link: function (scope, element, attrs) {
                    console.log(attrs);
                }
            }
        });
})();