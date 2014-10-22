; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('FlowCtrl', function () {
            var IMAGE_ROOT = 'content/images/';

            this.testData = [
                {
                    name: 'cream',
                    imageUrl: IMAGE_ROOT + 'parts/frames/blb-track-frameset-cream_1.jpg'
                },
                {
                    name: 'mint',
                    imageUrl: IMAGE_ROOT + 'parts/frames/blb-track-frameset-mint_1.jpg'
                }
            ];
        });
})();