; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('Parts', function (DataCollection) {
            function Parts() {
                DataCollection.apply(this, arguments);
            }
            Parts.prototype = new DataCollection();
            Parts.prototype.processData = processData;
            Parts.prototype.updateSelectedPart = updateSelectedPart;

            return new Parts('scripts/partdata.json');

            //---------------------------------------------------------------------------------//

            function processData(data) {
                return data;
            }

            function updateSelectedPart(sectionName, selectedPart) {
                var section = this.items[sectionName];
                if (!section) {
                    return;
                }

                _.each(section.parts, function (part) {
                    part.selected = part.name == selectedPart.name;
                });
            }
        });
})();