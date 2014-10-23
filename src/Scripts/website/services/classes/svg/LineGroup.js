; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('LineGroup', function () {
            return LineGroup;

            function Line(lineData, color) {
                this.data = lineData.split(',');
                this.color = color;
            }

            function LineGroup() {
                this.callSuperConstructor(this, arguments);

                var linesDataArr = this.data.split('|');
                this.lines = [];

                var self = this;
                _.forEach(linesDataArr, function (lineData) {
                    self.lines.push(new Line(lineData, self.color));
                });
            }
        });
})();