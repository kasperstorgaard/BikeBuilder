;(function () {
    'use strict';

    angular.module('bikeBuilder')
        .directive('partSection', function ($rootScope) {
            return {
                restrict: 'A',
                scope: {
                    'name': '=partSection',
                    'type': '=partType',
                    'parts': '='
                },
                replace: true,
                templateUrl: 'part.section.tpl.html',
                link: function (scope) {
                    //scope.$on('part:selected', updateSelected);
                    
                    //-----------------------------------------//

                    //function updateSelected(event, selectedPart) {
                    //    $rootScope.$broadcast('update:selected', selectedPart);
                    //    _.each(scope.parts, function (part) {
                    //        part.selected = part.name == selectedPart.name;
                    //    });
                    //}
                }
            };
        });
})();

