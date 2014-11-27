describe('controller:flow |', function() {

    var scope, ctrl, $rootScope, $q, Parts, SvgParts;

    var fakeData = { 'test': 2 };

    function stubPartsService() {
        var dfd = $q.defer();
        dfd.resolve(fakeData);
        sinon.stub(Parts, "fetch").returns(dfd.promise);
    }

    beforeEach(module('bikeBuilder'));
    beforeEach(inject(function ($controller, _$rootScope_, _$q_,_Parts_ , _SvgParts_) {
        $rootScope = _$rootScope_;
        Parts = _Parts_;
        SvgParts = _SvgParts_;
        $q = _$q_;
        
        scope = $rootScope.$new();
        stubPartsService();

        ctrl = $controller('FlowCtrl', { $scope: scope, $rootScope: $rootScope, Parts: Parts, SvgParts: SvgParts });
        scope.$digest();
    }));

    describe('partSelected |', function () {
        it('should be defined', function() {
            expect(ctrl.partSelected).not.toBeUndefined();
        });

        it('should return null when called without all proper arguments', function() {
            expect(ctrl.partSelected()).toBe(null);
            expect(ctrl.partSelected("asasdf")).toBe(null);
        });

        it('should call updateSvgPart with variant', function () {
            sinon.spy(ctrl, "updateSvgPart");
            var args = ["somename", {}, {}];
            ctrl.partSelected("fakeevent", args[0], args[1], args[1]);
            expect(ctrl.updateSvgPart.calledWith(args[2])).toBe(true);
        });

        it('should call parts service.updateSelectedPart with sectionName and selectedPart', function () {
            sinon.spy(Parts, "updateSelectedPart");
            var args = ["somename", {}];
            ctrl.partSelected("fakeevent", args[0], args[1], {});
            expect(Parts.updateSelectedPart.calledWith(args[0], args[1])).toBe(true);
        });

        it('should broadcast "update:selected" on rootscope with args except event', function () {
            sinon.spy($rootScope, "$broadcast");
            var args = ["somename", {}, {}];
            ctrl.partSelected("fakeevent", args[0], args[1], args[1]);
            expect($rootScope.$broadcast.calledWith('update:selected', args[0], args[1], args[2])).toBe(true);
        });

        it('should return ctrl for chaining', function () {
            expect(ctrl.partSelected("fakeevent", "sectionName", {}, {})).toEqual(ctrl);
        });
    });

    describe('updateSvgPart |', function () {
        it('should be defined', function () {
            expect(ctrl.updateSvgPart).not.toBeUndefined();
        });

        it('should return null when called with anything but obj with colors prop', function () {
            expect(ctrl.updateSvgPart(null)).toBe(null);
            expect(ctrl.updateSvgPart("sdfsdf")).toBe(null);
            expect(ctrl.updateSvgPart({})).toBe(null);
            expect(ctrl.updateSvgPart({wrongprop: {} })).toBe(null);
        });

        it('should call "svgParts.updateone" once when one color in variant', function () {
            sinon.spy(SvgParts, 'updateOne');
            ctrl.updateSvgPart({ "colors": { "frame": "#e0dbbd" }});
            expect(SvgParts.updateOne.calledOnce).toBe(true);
        });

        it('should return ctrl for chaining', function () {
            expect(ctrl.updateSvgPart({ "colors": { "frame": "#e0dbbd" } })).toEqual(ctrl);
        });
    });

    describe('partDataFetched |', function () {
        it('should be defined', function () {
            expect(ctrl.partDataFetched).not.toBeUndefined();
        });

        it('should set partSections', function() {
            ctrl.partDataFetched(2);
            expect(ctrl.partSections).toBe(2);
        });

        it('should return ctrl for chaining', function () {
            expect(ctrl.partDataFetched(2)).toEqual(ctrl);
        });
    });
});