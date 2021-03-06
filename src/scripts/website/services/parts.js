﻿; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .service('Parts', function (DataCollection) {
            function Parts() {
                DataCollection.apply(this, arguments);
            }
            Parts.prototype = new DataCollection();
            Parts.prototype.updateSelectedPart = updateSelectedPart;

            return new Parts({ filePath: 'scripts/partdata.json', isAsync: true });

            //-----------------------------------------------------//

            function updateSelectedPart(sectionName, selectedPart) {
                if (!sectionName || !selectedPart) {
                    return null;
                }

                var section = this.items[sectionName];
                if (!section) {
                    return null;
                }

                _.each(section.parts, function (part) {
                    part.selected = part.name == selectedPart.name;
                });

                return this.items;
            }
        });
})();