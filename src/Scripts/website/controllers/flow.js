; (function () {
    'use strict';
    angular.module('bikeBuilder')
        .controller('FlowCtrl', function ($scope, SvgParts) {
            var IMAGE_ROOT = 'content/images/';
            var self = this;

            $scope.$on('part:clicked', updateSvgPart);

            setupPartData();
            //-----------------------------------//

            function updateSvgPart(event, part, selectedVariant) {
                console.log(part, selectedVariant);
                if (selectedVariant.color) {
                    SvgParts.updateOne(part.type, { 'color': selectedVariant.color });
                }
            }

            function setupPartData() {
                self.partSections = [
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
                                    color: '#e0dbbd',
                                    imageUrl: IMAGE_ROOT + 'parts/frames/blb-track-frameset-cream_1.jpg'
                                }, {
                                    name: 'mint',
                                    color: '#93dcbf',
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
                                    color: '#2b2e35',
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
                                    color: '#f7f7f7',
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
                                    color: '#f9f9f9',
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
                        'type': 'chain',
                        'variants': [
                            {
                                name: 'white',
                                color: '#f8faf7',
                                imageUrl: IMAGE_ROOT + 'parts/chains/cadena-kmc-blanco1.jpg'
                            }, {
                                name: 'orange',
                                color: '#d82e21',
                                imageUrl: IMAGE_ROOT + 'parts/chains/cadena-kmc-naranja1_1.jpg'
                            },
                            {
                                name: 'red',
                                color: '#d5363b',
                                imageUrl: IMAGE_ROOT + 'parts/chains/cadena-kmc-rojo1.jpg'
                            },
                            {
                                name: 'gold',
                                color: '#ddd163',
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
                                color: '#272725',
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
                                color: '#acce32',
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
            }


        });
})();