; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('PreviewCtrl', function ($scope) {
            var ctrl = this;

            var parts = {
                rearSpokes: {
                    color: 'blue'
                },
                frontHub: {
                    color: 'yellow'
                }
            };

            ctrl.getPart = function(key) {
                return parts[key] || {};
            }
        });
})();