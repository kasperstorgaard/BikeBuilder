angular.module("bikeBuilder").run(["$templateCache", function($templateCache) {$templateCache.put("line.group.tpl.html","<g id={{model.key}} ng-click=\"handleClicked(model.key)\" ng-class=\"[model.key, model.active ? \'active\' : \'\']\">\r\n    <line svg-line ng-repeat=\"line in model.lines\" model=\"line\"></line>\r\n</g>");
$templateCache.put("line.tpl.html","<line fill=\"none\" ng-class=\"[model.key, model.type]\" ng-style=\"getStyle()\"\r\n      ng-attr-x1=\"{{model.data[0]}}\" ng-attr-y1=\"{{model.data[1]}}\" ng-attr-x2=\"{{model.data[2]}}\" ng-attr-y2=\"{{model.data[3]}}\" \r\n      ng-attr-stroke-dasharray=\"{{pathLength}}\" ng-attr-stroke-dashoffset=\"{{pathLength}}\" />\r\n");
$templateCache.put("part.section.tpl.html","<div class=\"part-section\">\r\n    <h2 class=\"part-section-name\">{{name}}</h2>\r\n    <div part=\"part.name\" type=\"part.type\" variants=\"part.variants\" ng-repeat=\"part in getParts()\">\r\n    </div>\r\n</div>");
$templateCache.put("part.tpl.html","<div class=\"part\">\r\n    <h3 class=\"part-name\">{{name}}</h3>\r\n    <div variant-picker=\"variants\"></div>\r\n</div>");
$templateCache.put("path.tpl.html","<path id={{model.key}} fill=\"none\" ng-click=\"handleClicked(model.key)\" ng-class=\"[model.type, model.active ? \'active\' : \'\']\" \r\n      ng-style=\"getStyle()\" ng-attr-stroke-dasharray=\"{{pathLength}}\" ng-attr-stroke-dashoffset=\"{{pathLength}}\" ng-attr-d=\"{{model.data}}\" />");
$templateCache.put("spinner.tpl.html","<div class=\"spinner\">\r\n    <h3 class=\"load-text\">Loading...</h3>\r\n    <?xml version=\"1.0\" encoding=\"utf-8\" ?>\r\n    <svg id=\"spinner-svg{{spinnerKeyPostFix}}\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n         viewBox=\"204 89.3 243.3 243.3\" enable-background=\"new 204 89.3 243.3 243.3\" xml:space=\"preserve\">\r\n    <g id=\"spinner-wrapper{{spinnerKeyPostFix}}\"><g id=\"spinner-wheel{{spinnerKeyPostFix}}\">\r\n    <path id=\"spinner-rim{{spinnerKeyPostFix}}\" fill=\"none\" d=\"M259.6,125.2c50.2-39,119.1-27.8,155.4,20.8c36.2,48.5,22.1,114.4-24.1,153.6\r\n		c-29.5,25-108.9,36.5-153.5-20.9C206.1,238.4,213.9,160.7,259.6,125.2z M248.2,270.7c38.3,49.2,90.8,49.7,133.1,18\r\n		s53.2-92.4,22.1-134c-31.1-41.7-86.4-55.7-134.8-16.8C224,173.7,221.3,236.1,248.2,270.7z\" />\r\n    <g id=\"spinner-spokes{{spinnerKeyPostFix}}\">\r\n    <line fill=\"none\" x1=\"416.9\" y1=\"180.9\" x2=\"338.7\" y2=\"203.9\" />\r\n    <line fill=\"none\" x1=\"338.7\" y1=\"203.9\" x2=\"386\" y2=\"136.3\" />\r\n    <line fill=\"none\" x1=\"398.7\" y1=\"150.7\" x2=\"343.2\" y2=\"215.1\" />\r\n    <line fill=\"none\" x1=\"409.6\" y1=\"164.1\" x2=\"329.2\" y2=\"199.8\" />\r\n    <line fill=\"none\" x1=\"420.1\" y1=\"199.8\" x2=\"343.2\" y2=\"215.1\" />\r\n    <line fill=\"none\" x1=\"420.9\" y1=\"217.9\" x2=\"339.8\" y2=\"221.9\" />\r\n    <line fill=\"none\" x1=\"416.9\" y1=\"236.4\" x2=\"340.9\" y2=\"207.4\" />\r\n    <line fill=\"none\" x1=\"410.5\" y1=\"253.9\" x2=\"342.3\" y2=\"211\" />\r\n    <line fill=\"none\" x1=\"401\" y1=\"269.3\" x2=\"334.2\" y2=\"226.4\" />\r\n    <line fill=\"none\" x1=\"388.3\" y1=\"282.9\" x2=\"332\" y2=\"227.6\" />\r\n    <line fill=\"none\" x1=\"356.1\" y1=\"303.2\" x2=\"339.8\" y2=\"221.9\" />\r\n    <line fill=\"none\" x1=\"340.9\" y1=\"221.9\" x2=\"373.8\" y2=\"293.9\" />\r\n    <line fill=\"none\" x1=\"320.9\" y1=\"310.5\" x2=\"322.2\" y2=\"226.4\" />\r\n    <line fill=\"none\" x1=\"300.7\" y1=\"307.8\" x2=\"327\" y2=\"227.6\" />\r\n    <line fill=\"none\" x1=\"282.3\" y1=\"300.4\" x2=\"332\" y2=\"227.6\" />\r\n    <line fill=\"none\" x1=\"268.1\" y1=\"291.1\" x2=\"315.4\" y2=\"211\" />\r\n    <line fill=\"none\" x1=\"254.2\" y1=\"277.8\" x2=\"315.4\" y2=\"220.5\" />\r\n    <line fill=\"none\" x1=\"244.1\" y1=\"264.8\" x2=\"319\" y2=\"224\" />\r\n    <line fill=\"none\" x1=\"319\" y1=\"224\" x2=\"338.7\" y2=\"308.6\" />\r\n    <line fill=\"none\" x1=\"235.5\" y1=\"246.3\" x2=\"319.5\" y2=\"226.4\" />\r\n    <line fill=\"none\" x1=\"231.8\" y1=\"229.5\" x2=\"319\" y2=\"204.3\" />\r\n    <line fill=\"none\" x1=\"231.1\" y1=\"209.4\" x2=\"316.8\" y2=\"207.4\" />\r\n    <line fill=\"none\" x1=\"234.3\" y1=\"190.7\" x2=\"316\" y2=\"217.9\" />\r\n    <line fill=\"none\" x1=\"241\" y1=\"172.5\" x2=\"315.5\" y2=\"215.1\" />\r\n    <line fill=\"none\" x1=\"252.2\" y1=\"154.4\" x2=\"319\" y2=\"204.3\" />\r\n    <line fill=\"none\" x1=\"264.8\" y1=\"141.1\" x2=\"323.8\" y2=\"200.8\" />\r\n    <line fill=\"none\" x1=\"296.2\" y1=\"121.4\" x2=\"319.5\" y2=\"204.1\" />\r\n    <line fill=\"none\" x1=\"315.4\" y1=\"116\" x2=\"330.3\" y2=\"199.3\" />\r\n    <line fill=\"none\" x1=\"334.7\" y1=\"116\" x2=\"338.7\" y2=\"203.9\" />\r\n    <line fill=\"none\" x1=\"352.3\" y1=\"118.2\" x2=\"319\" y2=\"204.3\" />\r\n    <line fill=\"none\" x1=\"370.2\" y1=\"125.5\" x2=\"330.3\" y2=\"199.3\" />\r\n            </g>\r\n    <path id=\"spinner-tire{{spinnerKeyPostFix}}\" fill=\"none\" d=\"M259.6,125.2c50.2-39,119.1-27.8,155.4,20.8c36.2,48.5,22.1,114.4-24.1,153.6\r\n		c-29.5,25-108.9,36.5-153.5-20.9C206.1,238.4,213.9,160.7,259.6,125.2z M231.1,285.9c35.4,52.1,115,53.5,162.8,19.5\r\n		c48.2-34.3,65.4-116.9,26.1-164.1C378.8,91.6,318,73.1,252.2,121.5C208.4,153.6,191.6,227.6,231.1,285.9z\" />\r\n    <path id=\"spinner-hub{{spinnerKeyPostFix}}\" fill=\"none\" d=\"M315.4,213.7c0-2.3,0.7-13.9,13.5-13.9c7.4,0,13.5,6.2,13.5,13.9s-6.1,13.9-13.6,13.9\r\n		C321.4,227.6,315.4,221.5,315.4,213.7z M323,218l-4.1,0.6l3.4,3.2L323,218z M333.8,216.9l0.7,4.1l3.1-3.5L333.8,216.9z M328,219.9\r\n		l-1.3,4l4.3-0.7L328,219.9z M318.7,211.2l-0.4,4.1l3.9-2.5L318.7,211.2z M323.9,208.3l1.3-3.9l-4.4,1.6L323.9,208.3z M334.5,205.7\r\n		l-5.3-2.9l1.7,4.3L334.5,205.7z M334.8,211.3l4,1.1l-1.8-4.3L334.8,211.3z\" />\r\n        </g>\r\n        </g>\r\n    </svg>\r\n</div>");
$templateCache.put("variant.picker.tpl.html","<div class=\"variant-picker\">\r\n    <div class=\"images-stack\">\r\n        <img class=\"variant-image\" ng-src=\"{{variant.imageUrl}}\" ng-class=\"{\'selected\': variant.name == selectedVariant.name }\" ng-repeat=\"variant in variants\" />\r\n    </div>\r\n    <div class=\"btn-group variant-buttons\">\r\n        <a class=\"btn btn-lg btn-default variant-button\" ng-class=\"{\'active\': variant.name == selectedVariant.name }\" ng-click=\"setSelectedVariant(variant)\" ng-repeat=\"variant in variants\">{{variant.name}}</a>\r\n    </div>\r\n</div>");}]);