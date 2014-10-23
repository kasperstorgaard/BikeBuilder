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
                            'name': 'blb track',
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
                            'name': 'dolan pre cursa',
                            'type': 'frame',
                            'variants': [
                                {
                                    name: 'black',
                                    imageUrl: IMAGE_ROOT + 'parts/frames/cuadro-dolan-negro_1.jpg'
                                }
                            ]
                        },
                        {
                            'name': '8bar krzberg-v4',
                            'type': 'frame',
                            'variants': [
                                {
                                    name: 'white',
                                    imageUrl: IMAGE_ROOT + 'parts/frames/8bar-krzberg-v4_white-1.jpg'
                                }
                            ]
                        },
                        {
                            'name': 'leader 725',
                            'type': 'frame',
                            'variants': [
                                {
                                    name: 'white',
                                    imageUrl: IMAGE_ROOT + 'parts/frames/leader-frame-725-white.jpg'
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
                            'name': 'cadena kmc',
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
                            'name': 'cadena fixie',
                            'type': 'chain',
                            'variants': [
                                {
                                    name: 'black',
                                    imageUrl: IMAGE_ROOT + 'parts/chains/cadena-fixie-negro.jpg'
                                }
                            ]
                        },
                         {
                             'name': 'cadena taya',
                             'type': 'chain',
                             'variants': [
                                 {
                                     name: 'green',
                                     imageUrl: IMAGE_ROOT + 'parts/chains/cadena-taya-mezzo-verde.jpg'
                                 }
                             ]
                         }
                    ]
                },
                {
                    'name': 'wheels',
                    'part-type': 'wheel',
                    'parts': [
                        {
                            'name': 'aerospoke',
                            'type': 'wheel',
                            'variants': [
                                {
                                    name: 'white',
                                    imageUrl: IMAGE_ROOT + 'parts/wheels/aerospoke-blanco.jpg'
                                }, {
                                    name: 'black',
                                    imageUrl: IMAGE_ROOT + 'parts/wheels/aerospoke-negro-mate.jpg'
                                }
                            ]
                        },
                        {
                            'name': 'del negra',
                            'type': 'wheel',
                            'variants': [
                                {
                                    name: 'black',
                                    imageUrl: IMAGE_ROOT + 'parts/wheels/del-negra-1_1.jpg'
                                }
                            ]
                        },
                        {
                            'name': 'h plus son formation face',
                            'type': 'wheel',
                            'variants': [
                                {
                                    name: 'white',
                                    imageUrl: IMAGE_ROOT + 'parts/wheels/tras_hplus-son-formation-face-blanco-1.jpg'
                                }, {
                                    name: 'red',
                                    imageUrl: IMAGE_ROOT + 'parts/wheels/tras-hplus-son-formation-face-rojo-1_1.jpg'
                                }
                            ]
                        }
                    ]
                }
            ];
    });
})();