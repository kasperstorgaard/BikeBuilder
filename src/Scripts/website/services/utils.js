; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('utils', function () {
            return {
                'inherit': inherit
            };

            //---------------------------------------------------------------------------------//

            function inherit(child, base, props) {
                child.prototype = _.create(base.prototype, _.assign({
                    '_super': base.prototype,
                    'callSuperConstructor': function (ctx, args) {
                        base.call(ctx, args);
                    },
                    'constructor': child
                }, props));

                return child;
            }
        });
})();