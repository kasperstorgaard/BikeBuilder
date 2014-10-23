; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('FlowCtrl', function () {
            var IMAGE_ROOT = 'content/images/';

            this.partSections = [
                {
                    'name': 'frames',
                    'part-type': 'frame',
                    'parts': [
                        {
                            'name': 'blb-track',
                            'type': 'frame',
                            'variants': [
                                {
                                    name: 'cream',
                                    imageUrl: IMAGE_ROOT + 'parts/frames/blb-track-frameset-cream_1.jpg'
                                }, {
                                    name: 'mint',
                                    imageUrl: IMAGE_ROOT + 'parts/frames/blb-track-frameset-mint_1.jpg'
                                }
                            ]
                        },
                        {
                            'name': '8bar-krzberg-v4',
                            'type': 'frame',
                            'variants': [
                                {
                                    name: 'white',
                                    imageUrl: IMAGE_ROOT + 'parts/frames/8bar-krzberg-v4_white-1.jpg'
                                }
                            ]
                        }
                    ]
                },
                {
                    'name': 'chains',
                    'part-type': 'chain',
                    'parts': [
                        {
                            'name': 'cadena-kmc',
                            'type': 'frame',
                            'variants': [
                                {
                                    name: 'white',
                                    imageUrl: IMAGE_ROOT + 'parts/chains/cadena-kmc-blanco1.jpg'
                                }, {
                                    name: 'orange',
                                    imageUrl: IMAGE_ROOT + 'parts/chains/cadena-kmc-naranja1_1.jpg'
                                },
                                 {
                                     name: 'red',
                                     imageUrl: IMAGE_ROOT + 'parts/chains/cadena-kmc-rojo1.jpg'
                                 },
                                  {
                                      name: 'gold',
                                      imageUrl: IMAGE_ROOT + 'parts/chains/cadena-kmc-oro1.jpg'
                                  }
                            ]
                        },
                        {
                            'name': 'cadena-fixie',
                            'type': 'chain',
                            'variants': [
                                {
                                    name: 'black',
                                    imageUrl: IMAGE_ROOT + 'parts/chains/cadena-fixie-negro.jpg'
                                }
                            ]
                        },
                         {
                             'name': 'cadena-taya',
                             'type': 'chain',
                             'variants': [
                                 {
                                     name: 'green',
                                     imageUrl: IMAGE_ROOT + 'parts/chains/cadena-taya-mezzo-verde.jpg'
                                 }
                             ]
                         }
                    ]
                }
            ];
    });
})();