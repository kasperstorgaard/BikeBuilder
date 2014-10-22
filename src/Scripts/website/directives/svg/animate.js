; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .directive('svgAnimate', function () {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    'model':'@'
                },
                templateNamespace: 'svg',
                template: '<animate xlink:href="{{\'#\' + model.key}}" ng-attr-attributeName="{{model.attributeName}}" ng-attr-from="{{model.from}}" ng-attr-to="{{model.to}}"' +
                    ' ng-attr-dur="{{model.duration}}" ng-attr-begin="{{model.begin}}" ng-attr-repeatCount="{{model.repeatCount}}" fill="freeze" ng-attr-id="{{model.key}}" />',
                link: function(scope) {
                    var modelDefaults =
                    {
                        from: '0',
                        to: '0',
                        duration: '2s',
                        begin: '0s',
                        repeatCount: 'indefinite'
                    };

                    scope.model = _.assign(modelDefaults, scope.model);
                }
            }
        });
})();