describe('svg.parts |', function () {

    var SvgParts;

    beforeEach(module('bikeBuilder'));
    beforeEach(inject(function(_SvgParts_) {
        SvgParts = _SvgParts_;
    }));

    it('should be defined', function () {
        expect(SvgParts).not.toBeUndefined();
    });

    describe('addPart |', function () {
        it('should be defined', function () {
            expect(SvgParts.addPart).not.toBeUndefined();
        });

        it('should return null when called without key', function () {
            expect(SvgParts.addPart()).toEqual(null);
            expect(SvgParts.addPart(null, {})).toEqual(null);
        });

        it('should return null when called without type', function () {
            expect(SvgParts.addPart('testkey', {})).toEqual(null);
            expect(SvgParts.addPart('testkey', {type: null})).toEqual(null);
        });

        it('should return null when called without data', function () {
            expect(SvgParts.addPart('testkey', { type: 'Path', data: null })).toEqual(null);
            expect(SvgParts.addPart('testkey', { type: 'Path' })).toEqual(null);
        });

        it('should return null when called with nonexisting type', function () {
            expect(SvgParts.addPart('testkey', { type: 'nonexistingtype', data: null })).toEqual(null);
            expect(SvgParts.addPart('testkey', { type: 'nonexistingtype' })).toEqual(null);
        });

        it('should return the updated collection when adding', function () {
            SvgParts.addPart('base', { type: 'Path', data: 'somedata' });
            var updatedCollection = SvgParts.addPart('test', { type: 'Path', data: 'somedata' });
            expect(_.size(updatedCollection)).toEqual(2);
        });
    });

    describe('getPart |', function () {
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

    describe('updatePart |', function () {
        it('should be defined', function () {
            expect(SvgParts.updatePart).not.toBeUndefined();
        });
    });

    describe('model instance', function () {
        var modelInstance;

        beforeEach(function () {
            SvgParts.addPart('test', { type: 'Path', data: 'somedata' });
            modelInstance = SvgParts.getPart('test');
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
});