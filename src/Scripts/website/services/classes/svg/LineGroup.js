; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('LineGroup', function () {
            return LineGroup;

            function Line(lineData) {
                this.data = lineData.split(',');
            }

            function LineGroup() {
                this.callSuperConstructor(this, arguments);

                var linesDataArr = this.data.split('|');
                this.lines = [];

                var self = this;
                _.forEach(linesDataArr, function (lineData) {
                    self.lines.push(new Line(lineData));
                });
            }
        });
})();