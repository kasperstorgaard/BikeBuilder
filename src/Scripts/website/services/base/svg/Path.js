; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('Path', function () {
            return function Path() {
                this.callSuperConstructor(this, arguments);
            }
        });
})();