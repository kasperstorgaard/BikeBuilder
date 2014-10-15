describe('bikeBuilder', function () {

    var SvgParts;

    beforeEach(module('bikeBuilder'));
    beforeEach(inject(function(_SvgParts_) {
        SvgParts = _SvgParts_;
    }));

    it('should be defined', function () {
        expect(SvgParts).not.toBeUndefined();
    });

    describe('model instance', function () {
        var modelInstance;

        beforeEach(function () {
            modelInstance = SvgParts.getPart('frame');
        });

        it('should be defined', function () {
            expect(modelInstance).not.toBeUndefined();
        });

        it('should have model data', function () {
            expect(modelInstance.data).not.toBeUndefined();
            expect(modelInstance.key).not.toBeUndefined();
            expect(modelInstance.color).not.toBeUndefined();
        });
    });

    describe('getPart', function() {
        it('should be defined', function() {
            expect(SvgParts.getPart).not.toBeUndefined();
        });

        it('should return a part when called with valid existing', function () {
            expect(SvgParts.getPart('frame')).not.toBeUndefined();
        });

        it('should return null when called with nonexisting key', function () {
            expect(SvgParts.getPart('nonexistingkey')).toEqual(null);
        });
    });

    describe('getPart', function () {
        it('should be defined', function () {
            expect(SvgParts.getPart).not.toBeUndefined();
        });

        it('should return a part when called with valid existing', function () {
            expect(SvgParts.getPart('frame')).not.toBeUndefined();
        });

        it('should return null when called with nonexisting key', function () {
            expect(SvgParts.getPart('nonexistingkey')).toEqual(null);
        });
    });
});