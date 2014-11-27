; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .factory('Bindable', function () {
            function Bindable() {
                this['_callbacks'] = [];
            }

            Bindable.prototype.onAttach = angular.noop;
            Bindable.prototype.onBound = angular.noop;
            Bindable.prototype.onUnBound = angular.noop;
            Bindable.prototype.onDetach = angular.noop;

            Bindable.prototype.bind = bind;
            Bindable.prototype.invoke = invoke;

            return Bindable;

            //--------------------------------------------------------------//

            function bind(callback) {
                var self = this;

                this['_callbacks'].push(callback);
                var index = this['_callbacks'].length - 1;

                if (index === 0) {
                    this.onAttach();
                }

                this.onBound();

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
                _.each(this['_callbacks'], function (callback) {
                    callback.apply(null, args);
                });
            }
        });
})();