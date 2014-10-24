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
                if (selectedVariant.colors) {
                    _.forEach(selectedVariant.colors, function (value, key) {
                        SvgParts.updateOne(key, { color: value });
                    });
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
                            'variants': [
                                {
                                    name: 'cream',
                                    colors: { 'frame': '#e0dbbd' },
                                    imageUrl: IMAGE_ROOT + 'parts/frames/blb-track-frameset-cream_1.jpg'
                                }, {
                                    name: 'mint',
                                    colors: { 'frame':'#93dcbf' },
                                    imageUrl: IMAGE_ROOT + 'parts/frames/blb-track-frameset-mint_1.jpg'
                                }
                            ]
                        },
                        {
                            'name': 'dolan pre cursa',
                            'variants': [
                                {
                                    name: 'black',
                                    colors: { 'frame':'#2b2e35' },
                                    imageUrl: IMAGE_ROOT + 'parts/frames/cuadro-dolan-negro_1.jpg'
                                }
                            ]
                        },
                        {
                            'name': '8bar krzberg-v4',
                            'variants': [
                                {
                                    name: 'white',
                                    colors: { 'frame':'#f7f7f7' },
                                    imageUrl: IMAGE_ROOT + 'parts/frames/8bar-krzberg-v4_white-1.jpg'
                                }
                            ]
                        },
                        {
                            'name': 'leader 725',
                            'variants': [
                                {
                                    name: 'white',
                                    colors: { 'frame':'#f9f9f9' },
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
                        'variants': [
                            {
                                name: 'white',
                                colors: { 'chain':'#f8faf7' },
                                imageUrl: IMAGE_ROOT + 'parts/chains/cadena-kmc-blanco1.jpg'
                            }, {
                                name: 'orange',
                                colors: { 'chain':'#d82e21' },
                                imageUrl: IMAGE_ROOT + 'parts/chains/cadena-kmc-naranja1_1.jpg'
                            },
                            {
                                name: 'red',
                                colors: { 'chain':'#d5363b' },
                                imageUrl: IMAGE_ROOT + 'parts/chains/cadena-kmc-rojo1.jpg'
                            },
                            {
                                name: 'gold',
                                colors: { 'chain':'#ddd163' },
                                imageUrl: IMAGE_ROOT + 'parts/chains/cadena-kmc-oro1.jpg'
                            }
                        ]
                    },
                    {
                        'name': 'cadena fixie',
                        'variants': [
                            {
                                name: 'black',
                                colors: { 'chain':'#272725' },
                                imageUrl: IMAGE_ROOT + 'parts/chains/cadena-fixie-negro.jpg'
                            }
                        ]
                    },
                    {
                        'name': 'cadena taya',
                        'variants': [
                            {
                                name: 'green',
                                colors: { 'chain': '#acce32' },
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
                                'variants': [
                                    {
                                        name: 'white',
                                        colors: {
                                            'rearRim': '#e3e6f9', 'rearHub': '#e3e6f9', 'rearSpokes': '#e3e6f9',
                                            'frontRim': '#e3e6f9', 'frontHub': '#e3e6f9', 'frontSpokes': '#e3e6f9'
                                        },
                                        imageUrl: IMAGE_ROOT + 'parts/wheels/aerospoke-blanco.jpg'
                                    }, {
                                        name: 'black',
                                        colors: {
                                            'rearRim': '#1f1f21', 'rearHub': '#1f1f21', 'rearSpokes': '#1f1f21',
                                            'frontRim': '#1f1f21', 'frontHub': '#1f1f21', 'frontSpokes': '#1f1f21'
                                        },
                                        imageUrl: IMAGE_ROOT + 'parts/wheels/aerospoke-negro-mate.jpg'
                                    }
                                ]
                            },
                            {
                                'name': 'del negra',
                                'variants': [
                                    {
                                        name: 'black',
                                        colors: {
                                            'rearRim': '#0f1014', 'rearHub': '#0f1014', 'rearSpokes': '#0f1014',
                                            'frontRim': '#0f1014', 'frontHub': '#0f1014', 'frontSpokes': '#0f1014'
                                        },
                                        imageUrl: IMAGE_ROOT + 'parts/wheels/del-negra-1_1.jpg'
                                    }
                                ]
                            },
                            {
                                'name': 'h plus son formation face',
                                'variants': [
                                    {
                                        name: 'white',
                                        colors: {
                                            'rearRim': '#c8c7cc', 'rearHub': '#c8c7cc', 'rearSpokes': '#c8c7cc',
                                            'frontRim': '#c8c7cc', 'frontHub': '#c8c7cc', 'frontSpokes': '#c8c7cc'
                                        },
                                        imageUrl: IMAGE_ROOT + 'parts/wheels/tras_hplus-son-formation-face-blanco-1.jpg'
                                    }, {
                                        name: 'red',
                                        colors: {
                                            'rearRim': '#991b26', 'rearHub': '#242527', 'rearSpokes': '#242527',
                                            'frontRim': '#991b26', 'frontHub': '#242527', 'frontSpokes': '#242527'
                                        },
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