describe('controller:preview |', function() {

    var scope, ctrl, $rootScope, $q, DataCollection, SvgParts;

    var svgData = {
        "rearTire": {
            "type": "Path",
            "data": "M18.9,229.1c-2-55.7,40.4-87.7,86-87.8c43.9-0.1,85,40.3,85,87.8s-31.1,86-85,86 C64.9,315.1,20.8,280.4,18.9,229.1z M104.1,320.2c58.8,0,92.3-44.3,91.3-90.7c-1-47.8-36.5-93.3-90-93.3c-51.5,0-94.8,35-92.5,95.8 C14.6,277.4,57.1,320.2,104.1,320.2z"
        },
        "rearHub": {
            "type": "Path",
            "data": "M101.5,221c5.8,1.5,9.4,7.3,7.9,13s-7.4,9-13.2,7.5c-5.8-1.5-9.4-7.3-7.9-13 C89.8,222.8,95.7,219.5,101.5,221z M105.1,234.1l-2.5-0.6l0.7,2.4L105.1,234.1z M100.8,237.3l-1.3-2.5l-1.6,3.5L100.8,237.3z M94.7,234.1l-2,0.9l2.2,2.5L94.7,234.1z M94,230l-2.7-1.7l0.4,3.6L94,230z M93.7,225.2l1.9,1.6l0-2.9L93.7,225.2z M98.5,223.6 l1.5,3.2l1-3.8L98.5,223.6z"
        }
    };

    function stubDataCollection() {
        var dfd = $q.defer();
        dfd.resolve(svgData);

        sinon.stub(DataCollection.prototype, "fetch").returns(dfd.promise);
        sinon.stub(DataCollection.prototype, "getAll").returns(svgData);
    }

    beforeEach(module('bikeBuilder'));
    beforeEach(inject(function ($controller, _$rootScope_, _$q_, _DataCollection_, _SvgParts_) {
        $rootScope = _$rootScope_;
        DataCollection = _DataCollection_;
        SvgParts = _SvgParts_;
        $q = _$q_;

        scope = $rootScope.$new();
        stubDataCollection();
        sinon.spy(SvgParts, "add");
        ctrl = $controller('PreviewCtrl', { $scope: scope, $rootScope: $rootScope, DataCollection: DataCollection, SvgParts: SvgParts });
        scope.$digest();
    }));

    describe('getPart |', function () {
        it('should be defined', function () {
            expect(ctrl.getPart).not.toBeUndefined();
        });

        it('should return empty object when !SvgDataReady', function() {
            ctrl.SvgDataReady = false;
            expect(ctrl.getPart("somekey")).toEqual({});
        });

        it('should return "SvgParts.getOne"', function () {
            var result = SvgParts.getOne("rearTire");
            expect(ctrl.getPart("rearTire")).toEqual(result);
        });
    });

    describe('dataFetched |', function () {
        it('should be defined', function () {
            expect(ctrl.dataFetched).not.toBeUndefined();
        });

        it('should add each svg part', function () {
            expect(SvgParts.add.callCount).toBe(_.size(svgData)); //fake svgData has 2 items
        });

        it('should set SvgDataReady', function () {
            expect(ctrl.SvgDataReady).toBe(true);
        });
    });

    describe('updateActiveSvgPart |', function () {
        it('should be defined', function () {
            expect(ctrl.updateActiveSvgPart).not.toBeUndefined();
        });

        it('should update selected svgPart', function() {
            sinon.spy(SvgParts, "updateAll");
            sinon.spy(SvgParts, "updateOne");
            ctrl.updateActiveSvgPart("fakeevent", "rearTire");
            expect(SvgParts.updateAll.calledOnce).toBe(true);
            expect(SvgParts.updateOne.calledOnce).toBe(true);
        });
    });

});