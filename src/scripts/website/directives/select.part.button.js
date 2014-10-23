; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('selectPartButton', function () {
            return {
                restrict: 'A',
                scope: true,
                link: function (scope) {

                    scope.selectPart = selectPart;

                    //---------------------------------//
                    function selectPart ()
                    {
                        
                    }
                }
            };
        });
})();

