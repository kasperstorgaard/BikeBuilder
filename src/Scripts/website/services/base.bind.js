; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('BaseBind', function () {
            return function BaseBind() {
                var self = this;

                this.onAttach = angular.noop;
                this.onBound = angular.noop;
                this.onUnBound = angular.noop;
                this.onDetach = angular.noop;

                this['_callbacks'] = [];
                this.bind = bind;
                this.invoke = invoke;

                //--------------------------------------------------------------//

                function bind(callback) {
                    self['_callbacks'].push(callback);
                    var index = self['_callbacks'].length - 1;

                    if (index === 0) {
                        self.onAttach();
                    }
                    self.onBound();

                    return function unbind() {
                        self['_callbacks'].splice(index, 1);

                        self.onUnBound();

                        if (self['_callbacks'].length === 0) {
                            self.onDetach();
                        }
                    }
                };

                function invoke() {
                    var args = arguments;
                    _.forEach(self['_callbacks'], function (callback) {
                        callback.apply(null, args);
                    });
                }
            }
        });
})();